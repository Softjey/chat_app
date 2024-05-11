"use client";

import { formatDateToLastVisit } from "@/utils/formatDateToLastVisit";
import { Avatar, Chip } from "@nextui-org/react";
import { trim } from "../../utils/trim";
import { ComponentPropsWithoutRef } from "react";
import { Chat } from "@/types/Chat";
import Link from "next/link";

interface Props extends ComponentPropsWithoutRef<"article"> {
  chat: Chat;
  unreadMessages?: number;
}

export default function ChatItem({ chat, unreadMessages = 0, ...rest }: Props) {
  const { messages, name, photo, createdAt, id } = chat;
  const lastMessage = messages.length > 0 ? messages[0] : null;
  const trimmedLastMessage = lastMessage ? trim(lastMessage.content, 30) : "Group created";

  return (
    <Link href={`/chat/${id}`}>
      <article className="flex justify-between h-16" {...rest}>
        <div className="flex gap-3 items-center">
          <Avatar alt={`${name} avatar`} src={photo ?? ""} size="lg" />

          <div className="flex flex-col">
            <span className="text-medium">{name}</span>
            <span className="text-sm text-default-400">{trimmedLastMessage}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-end">
          <span className="text-xs text-default-400">
            {formatDateToLastVisit(lastMessage?.createdAt ?? createdAt)}
          </span>

          {unreadMessages > 0 && (
            <Chip color="primary" size="sm" className="text-xs">
              {unreadMessages}
            </Chip>
          )}
        </div>
      </article>
    </Link>
  );
}
