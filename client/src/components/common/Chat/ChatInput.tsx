"use client";

import SendIcon from "@/components/UI/icons/SendIcon";
import { Button, Textarea } from "@nextui-org/react";

interface Props {
  className?: string;
}

export function ChatInput({ className }: Props) {
  return (
    <form className={`flex items-end gap-4 py-4 px-8 ${className ?? ""}`}>
      <Textarea
        placeholder="Type a message..."
        minRows={1}
        maxRows={15}
        style={{ fontSize: "17px" }}
      />

      <Button isIconOnly color="primary">
        <SendIcon />
      </Button>
    </form>
  );
}
