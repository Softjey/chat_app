import { GetMyGroupsQuery } from "@/api/graphql/generated/graphql";

export type Chat = GetMyGroupsQuery["myGroups"][number]["group"];
