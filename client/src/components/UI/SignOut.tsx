"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export function SignOut(props: ButtonProps) {
  return (
    <Button onClick={() => signOut()} variant="light" {...props}>
      Sign out
    </Button>
  );
}
