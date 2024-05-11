"use client";

import React from "react";
import { ComponentPropsWithoutRef, memo } from "react";
import { useQuery } from "@apollo/client";
import apiClient from "@/api/apiClient";
import { ChatBar } from "@/components/common/Chat/ChatBar";
import { ChatHistory } from "@/components/common/Chat/ChatHistory";
import { ChatInput } from "@/components/common/Chat/ChatInput";
import { mainHeight } from "../../layout";

interface Props extends ComponentPropsWithoutRef<"section"> {
  params: { id: string };
}

export function ChatPage({ params: { id }, ...rest }: Props) {
  const { data, loading } = useQuery(apiClient.queries.GROUP, {
    variables: { groupId: id },
  });

  if (loading || !data) {
    return <p>Loading...</p>;
  }

  const { group } = data;

  return (
    <section className={`flex flex-col justify-between grow ${mainHeight}`} {...rest}>
      <ChatBar chatInfo={{ ...group, members: 1, online: 12 }} />
      <ChatHistory className="overflow-y-auto pretty-scrollbar" />
      <ChatInput className="top-shadow" />
    </section>
  );
}

export default memo(ChatPage);
