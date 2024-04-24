"use client";

import { IncomingMessage } from "./Message/IncomingMessage";
import { OutgoingMessage } from "./Message/OutgoingMessage";
import { MessageGroup } from "./data/messages";

interface GroupMessageProps {
  isOutgoing: boolean;
  group: MessageGroup;
}
export function GroupMessage({ group, isOutgoing }: GroupMessageProps) {
  return (
    <div className="flex flex-col gap-1 relative">
      {!isOutgoing && (
        <span className="text-xs pl-2 absolute -top-5">{group.sender}</span>
      )}
      <div className="flex flex-col gap-1">
        {group.messages.map((message) =>
          isOutgoing ? (
            <OutgoingMessage
              key={message.id}
              message={message}
              className="self-end"
            />
          ) : (
            <IncomingMessage key={message.id} message={message} />
          )
        )}
      </div>
    </div>
  );
}
