"use client";

import { Chat } from "@/types/Chat";
import { Navbar, NavbarContent, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface ChatInfo {
  id: Chat["id"];
  name: Chat["name"];
  photo: Chat["photo"];
  members: number;
  online: number;
}

interface Props extends ComponentPropsWithoutRef<"a"> {
  chatInfo: ChatInfo;
}

export function ChatBar({ chatInfo, ...rest }: Props) {
  const { id, name, members, online, photo } = chatInfo;

  return (
    <Link href={`...${id}`} {...rest}>
      <Navbar className="justify-between bottom-shadow" classNames={{ wrapper: "max-w-full" }}>
        <NavbarContent>
          <Avatar src={photo ?? ""} alt={`Group photo ${name}`} />
          <section className="flex flex-col gap-1">
            <span>{name}</span>
            <div>
              <span className="text-default-400">{members} members, </span>
              <span className="text-default-400">{online} online</span>
            </div>
          </section>
        </NavbarContent>

        {/* <NavbarContent justify="end">
          <span>Settings</span>
        </NavbarContent> */}
      </Navbar>
    </Link>
  );
}
