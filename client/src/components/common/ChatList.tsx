/* eslint-disable max-len */
"use client";

import React, { memo } from "react";
import { Listbox, ListboxItem, ListboxProps } from "@nextui-org/react";
import { chats } from "./chats-temp";
import ChatItem from "../UI/ChatItem";

function ChatList({ className }: Pick<ListboxProps, "className">) {
  return (
    <Listbox
      items={chats}
      selectionMode="single"
      variant="flat"
      className={`pretty-scrollbar overflow-y-auto ${className ?? ""}`}
      hideSelectedIcon
    >
      {(chat) => (
        <ListboxItem key={chat.id} textValue={chat.name}>
          <ChatItem
            chat={chat}
            unreadMessages={Math.floor(Math.random() * 10)}
          />
        </ListboxItem>
      )}
    </Listbox>
  );
}

export default memo(ChatList);
