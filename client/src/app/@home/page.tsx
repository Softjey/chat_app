"use client";

import { getHello } from "@/api/test";
import Chat from "@/components/common/Chat/Chat";
import ChatList from "@/components/common/ChatList";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export default function AuthorizedHomePage() {
  const session = useSession();
  const mainHeight = "h-[calc(100dvh-64px)]";

  return (
    <main className={`grow flex ${mainHeight}`}>
      <ChatList className="w-80" />

      {session.data && (
        <Button onClick={() => getHello(session.data.accessToken)}>
          Get Hello!
        </Button>
      )}

      <Chat className={`grow ${mainHeight}`} />
    </main>
  );
}