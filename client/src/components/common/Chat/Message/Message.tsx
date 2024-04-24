"use client";

import { Chip, ChipProps } from "@nextui-org/react";
import { Message as MessageI } from "../data/messages";
import { format } from "date-fns";

export interface MessageProps extends ChipProps {
  message: MessageI;
}

export function Message({ message, ...props }: MessageProps) {
  return (
    <Chip
      size="lg"
      radius="sm"
      classNames={{
        base: "h-auto p-2",
        content: "flex gap-2 max-w-96",
      }}
      {...props}
    >
      <span className="text-wrap">{message.text}</span>

      <span className="text-xs self-end select-none">
        {format(message.sentTime, "HH:mm")}
      </span>
    </Chip>
  );
}
