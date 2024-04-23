import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import AuthenticatedNavbar from "@/components/AuthenticatedNavbar";
import { auth } from "@/configs/auth";
import PublicNavbar from "@/components/PublicNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseChat",
  description: "A chat app built with Next.js and Nest.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header>
            {session ? <AuthenticatedNavbar /> : <PublicNavbar />}
          </header>
          <main className="flex flex-col items-center justify-center p-24 grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
