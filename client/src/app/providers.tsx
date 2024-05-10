"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import apiClient from "@/api/apiClient";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <ApolloProvider client={apiClient.apolloClient}>
        <NextUIProvider className="flex flex-col min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </NextUIProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
