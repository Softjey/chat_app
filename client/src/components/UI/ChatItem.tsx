import { formatDateToLastVisit } from "@/utils/formatDateToLastVisit";
import { Avatar, Chip } from "@nextui-org/react";

interface ChatItemI {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
}

interface Props {
  chat: ChatItemI;
  unreadMessages: number;
}

export default function ChatItem({ chat, unreadMessages }: Props) {
  const trimmedLastMessage =
    chat.lastMessage.length > 30
      ? `${chat.lastMessage.slice(0, 30)}...`
      : chat.lastMessage;

  return (
    <article className="flex justify-between h-16">
      <div className="flex gap-3 items-center">
        <Avatar alt={chat.name} src={chat.avatar} size="lg" />

        <div className="flex flex-col">
          <span className="text-medium">{chat.name}</span>
          <span className="text-sm text-default-400">{trimmedLastMessage}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-end">
        <span className="text-xs text-default-400">
          {formatDateToLastVisit(chat.lastMessageTime)}
        </span>

        {unreadMessages > 0 && (
          <Chip color="primary" size="sm" className="text-xs">
            {unreadMessages}
          </Chip>
        )}
      </div>
    </article>
  );
}
