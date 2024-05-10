import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateGroupDto = {
  description: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  photo: InputMaybe<Scalars['String']['input']>;
  privacyType: InputMaybe<GroupPrivacyType>;
};

export type CreateMessageDto = {
  content: Scalars['String']['input'];
  groupId: Scalars['ID']['input'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  groupUsers: Array<GroupUser>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo: Maybe<Scalars['String']['output']>;
  privacyType: GroupPrivacyType;
  updatedAt: Scalars['DateTime']['output'];
};


export type GroupGroupUsersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export enum GroupPrivacyType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type GroupUser = {
  __typename?: 'GroupUser';
  createdAt: Scalars['DateTime']['output'];
  group: Group;
  id: Scalars['ID']['output'];
  messages: Array<Message>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userRole: UserGroupRole;
};


export type GroupUserMessagesArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  groupUser: GroupUser;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGroup: Group;
  createMessage: Message;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupDto;
};


export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageDto;
};

export type Query = {
  __typename?: 'Query';
  getMyGroups: Array<GroupUser>;
  hello: Scalars['String']['output'];
};


export type QueryGetMyGroupsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  description: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastActivity: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  photo: Maybe<Scalars['String']['output']>;
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
  userGroups: Array<GroupUser>;
};


export type UserUserGroupsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export enum UserGroupRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type GetHelloQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloQuery = { __typename?: 'Query', hello: string };

export type GetMyGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyGroupsQuery = { __typename?: 'Query', myGroups: Array<{ __typename?: 'GroupUser', group: { __typename?: 'Group', id: string, name: string, photo: string | null, createdAt: any }, messages: Array<{ __typename?: 'Message', content: string, createdAt: any }> }> };


export const GetHelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"}}]}}]} as unknown as DocumentNode<GetHelloQuery, GetHelloQueryVariables>;
export const GetMyGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"myGroups"},"name":{"kind":"Name","value":"getMyGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyGroupsQuery, GetMyGroupsQueryVariables>;