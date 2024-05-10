import { GetMyGroupsQuery } from "@/api/graphql/generated/graphql";
import { formatDateToLastVisit } from "@/utils/formatDateToLastVisit";
import { Avatar, Chip } from "@nextui-org/react";
import { trim } from "../../utils/trim";

interface Props {
  chat: GetMyGroupsQuery["myGroups"][number];
  unreadMessages?: number;
}

export default function ChatItem({ chat: { group, messages }, unreadMessages = 0 }: Props) {
  const lastMessage = messages.length > 0 ? messages[0] : null;
  const trimmedLastMessage = lastMessage ? trim(lastMessage.content, 30) : "Group created";

  return (
    <article className="flex justify-between h-16">
      <div className="flex gap-3 items-center">
        <Avatar alt={`${group.name} avatar`} src={group.photo ?? ""} size="lg" />

        <div className="flex flex-col">
          <span className="text-medium">{group.name}</span>
          <span className="text-sm text-default-400">{trimmedLastMessage}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-end">
        <span className="text-xs text-default-400">
          {formatDateToLastVisit(lastMessage?.createdAt ?? group.createdAt)}
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
