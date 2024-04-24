"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { memo } from "react";

function SignOut(props: ButtonProps) {
  return (
    <Button onClick={() => signOut()} variant="light" {...props}>
      Sign out
    </Button>
  );
}

export default memo(SignOut);
