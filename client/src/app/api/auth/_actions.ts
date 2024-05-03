"use server";

import jwt from "jsonwebtoken";
import { auth, authConfig, signIn as authSignIn, signOut as authSignOut } from "@/configs/auth";

export const signIn = async () => {
  await authSignIn("google");
};

export const signOut = async () => {
  await authSignOut();
};

export const getAccessToken = async () => {
  const session = await auth();

  if (!session) {
    return null;
  }

  const accessToken = jwt.sign(session, process.env.AUTH_SECRET!, {
    expiresIn: authConfig.accessTokenExpires,
  });

  return accessToken;
};
