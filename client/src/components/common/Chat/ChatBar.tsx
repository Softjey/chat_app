"use client";

import { Avatar, Navbar, NavbarContent } from "@nextui-org/react";

export function ChatBar() {
  return (
    <Navbar
      className="justify-between bottom-shadow"
      classNames={{ wrapper: "max-w-full" }}
    >
      <NavbarContent>
        <Avatar />
        <section className="flex flex-col gap-1">
          <span>Super group</span>
          <div>
            <span className="text-default-400">39 members, </span>
            <span className="text-default-400">3 online</span>
          </div>
        </section>
      </NavbarContent>

      <NavbarContent justify="end">
        <span>Settings</span>
      </NavbarContent>
    </Navbar>
  );
}
