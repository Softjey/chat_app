"use server";

import { signIn as authSignIn } from "@/app/api/auth/auth";

export const signIn = async () => {
  await authSignIn("google");
};
