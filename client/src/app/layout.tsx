import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import AuthenticatedNavbar from "@/components/common/AuthenticatedNavbar";
import { auth } from "@/configs/auth";
import PublicNavbar from "@/components/common/PublicNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseChat",
  description: "A chat app built with Next.js and Nest.js",
};

interface Props {
  children: React.ReactNode;
  home: React.ReactNode;
  publicHome: React.ReactNode;
}

export default async function RootLayout({ home, publicHome }: Props) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {session ? <AuthenticatedNavbar /> : <PublicNavbar />}
          {session ? home : publicHome}
        </Providers>
      </body>
    </html>
  );
}
