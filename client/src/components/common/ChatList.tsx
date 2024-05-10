"use client";

import React, { memo } from "react";
import { Listbox, ListboxItem, ListboxProps } from "@nextui-org/react";
import ChatItem from "../UI/ChatItem";
import { useQuery } from "@apollo/client";
import apiClient from "@/api/apiClient";

function ChatList({ className }: Pick<ListboxProps, "className">) {
  const { loading, data, error } = useQuery(apiClient.queries.MY_GROUPS);

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Listbox
      items={data.myGroups}
      selectionMode="single"
      variant="flat"
      className={`pretty-scrollbar overflow-y-auto ${className ?? ""}`}
      hideSelectedIcon
    >
      {(myGroup) => (
        <ListboxItem key={myGroup.group.id} textValue={myGroup.group.name}>
          <ChatItem chat={myGroup} />
        </ListboxItem>
      )}
    </Listbox>
  );
}

export default memo(ChatList);
