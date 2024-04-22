"use server";

import { signIn as authSignIn, signOut as authSignOut } from "@/configs/auth";

export const signIn = async () => {
  await authSignIn("google");
};

export const signOut = async () => {
  await authSignOut();
};
