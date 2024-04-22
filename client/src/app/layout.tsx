import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "A chat app built with Next.js and Nest.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-between p-24 dark">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
