import { Session as AuthSession } from "next-auth";

declare module "next-auth" {
  export interface Session extends AuthSession {
    accessToken: string;
  }
}
