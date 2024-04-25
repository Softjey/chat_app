import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account, trigger }) {
      if (trigger === "signIn" && account) {
        return { ...token, accessToken: account.access_token };
      }

      return token;
    },
    session: async ({ session, token: { accessToken } }) => {
      return { ...session, accessToken };
    },
  },
});
