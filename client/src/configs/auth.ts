import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
