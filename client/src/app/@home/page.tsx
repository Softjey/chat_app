"use client";

import { useLazyQuery } from "@apollo/client";
import apiClient from "@/api/apiClient";
import Chat from "@/components/common/Chat/Chat";
import ChatList from "@/components/common/ChatList";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function AuthorizedHomePage() {
  const [getHello, { data }] = useLazyQuery(apiClient.getGqlHello());
  const session = useSession();
  const mainHeight = "h-[calc(100dvh-64px)]";

  if (data) {
    console.log(data);
  }

  return (
    <main className={`grow flex ${mainHeight}`}>
      <ChatList className="w-80" />

      {session.data && <Button onClick={() => getHello()}>Get Hello!</Button>}

      <Chat className={`grow ${mainHeight}`} />
    </main>
  );
}
