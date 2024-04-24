import { memo } from "react";
import { ChatHistory } from "./ChatHistory";
import { ChatBar } from "./ChatBar";
import { ChatInput } from "./ChatInput";

interface Props {
  className?: string;
}

function Chat({ className }: Props) {
  return (
    <section className={`flex flex-col justify-between ${className ?? ""}`}>
      <ChatBar />
      <ChatHistory className="overflow-y-auto pretty-scrollbar" />
      <ChatInput className="top-shadow" />
    </section>
  );
}

export default memo(Chat);
