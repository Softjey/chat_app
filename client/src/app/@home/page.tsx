import Chat from "@/components/common/Chat/Chat";
import ChatList from "@/components/common/ChatList";

export default function AuthorizedHomePage() {
  const mainHeight = "h-[calc(100dvh-64px)]";

  return (
    <main className={`grow flex ${mainHeight}`}>
      <ChatList className="w-80" />

      <Chat className={`grow ${mainHeight}`} />
    </main>
  );
}
