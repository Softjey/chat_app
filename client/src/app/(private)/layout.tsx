import AuthenticatedNavbar from "@/components/common/AuthenticatedNavbar";
import ChatList from "@/components/common/ChatList";
import { ComponentPropsWithRef } from "react";

interface LayoutProps extends ComponentPropsWithRef<"main"> {
  children: React.ReactNode;
}

export const mainHeight = "h-[calc(100dvh-64px)]";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AuthenticatedNavbar />
      <main className={`grow flex ${mainHeight}`}>
        <ChatList className="w-80" />

        {children}
      </main>
    </>
  );
}
