import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/page";
import { CartProvider } from "../../context/Cart_Context";
import { Toaster } from "react-hot-toast";
import SessionProvider from "../../utils/SessionProvider";
import Providers from "../../Providers";
import { getServerSession } from "next-auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Avion",
  description: "Furniture Website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <SessionProvider session={session}>
        <CartProvider>
          <Toaster /> 
          <Providers>
          {children}
          </Providers>
          <Footer />
        </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
