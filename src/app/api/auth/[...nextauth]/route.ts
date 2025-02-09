// import NextAuth, { AuthOptions, User } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { JWT } from 'next-auth/jwt'; // Correct way to import JWT as a type

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (credentials?.email && credentials?.password) {
//           const user: User = {
//             id: '1',
//             name: 'User',
//             email: credentials.email,
//           };
//           return user;
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/auth',
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   callbacks: {
//     async jwt({ token, user }: { token: JWT; user?: User }) {
//       if (user) {
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }: { session: any; token: JWT }) {
//       session.user.email = token.email as string;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { client } from "@/sanity/lib/client"; 

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        try {
          const user = await client.fetch(
            `*[_type == "user" && email == $email]`,
            { email: credentials.email }
          );

          if (user.length > 0) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user[0].password
            );
            if (isPasswordCorrect) {
              return user[0]; // Return user if valid credentials
            }
          }
        } catch (err: any) {
          throw new Error(err.message || "Error fetching user from Sanity");
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],

  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account | null }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (account?.provider === "github" || account?.provider === "google") {
        try {
          const existingUser = await client.fetch(
            `*[_type == "user" && email == $email]`,
            { email: user.email }
          );

          if (existingUser.length === 0) {
            const newUser = {
              _type: "user",
              email: user.email,
            };

            await client.create(newUser);
          }
          return true;
        } catch (err: any) {
          console.log("Error saving user to Sanity:", err);
          return false;
        }
      }

      return true;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
