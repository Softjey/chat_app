"use client";

import { messageGroups } from "./data/messages";
import { GroupMessage } from "./GroupMessage";

interface Props {
  className?: string;
}

export function ChatHistory({ className }: Props) {
  return (
    <div className={`flex flex-col gap-7 text-6xl p-7 ${className ?? ""}`}>
      {messageGroups.map((group) => (
        <GroupMessage
          key={group.id}
          group={group}
          isOutgoing={group.sender === "Alice"}
        />
      ))}
    </div>
  );
}
