

// import NextAuth from "next-auth";
// import { NextAuthOptions } from "next-auth";
// import { Account, User as AuthUser } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import { client } from "@/sanity/lib/client";

// // Define auth options correctly
// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           throw new Error("No credentials provided");
//         }
//         try {
//           const user = await client.fetch(
//             `*[_type == "user" && email == $email]`,
//             { email: credentials.email }
//           );

//           if (user.length > 0) {
//             const isPasswordCorrect = await bcrypt.compare(
//               credentials.password,
//               user[0].password
//             );
//             if (isPasswordCorrect) {
//               return user[0]; // Return user if valid credentials
//             }
//           }
//         } catch (err: any) {
//           throw new Error(err.message || "Error fetching user from Sanity");
//         }
//       },
//     }),

//     GithubProvider({
//       clientId: process.env.GITHUB_ID ?? "",
//       clientSecret: process.env.GITHUB_SECRET ?? "",
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID ?? "",
//       clientSecret: process.env.GOOGLE_SECRET ?? "",
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account }: { user: AuthUser; account: Account | null }) {
//       if (account?.provider === "credentials") {
//         return true;
//       }

//       if (account?.provider === "github" || account?.provider === "google") {
//         try {
//           const existingUser = await client.fetch(
//             `*[_type == "user" && email == $email]`,
//             { email: user.email }
//           );

//           if (existingUser.length === 0) {
//             const newUser = {
//               _type: "user",
//               email: user.email,
//             };

//             await client.create(newUser);
//           }
//           return true;
//         } catch (err: any) {
//           console.log("Error saving user to Sanity:", err);
//           return false;
//         }
//       }

//       return true;
//     },
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // ✅ Import from new file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


