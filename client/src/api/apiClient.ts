import { AxiosInstance } from "axios";
import { ApolloClient, DocumentNode, NormalizedCacheObject, gql } from "@apollo/client";
import { createAxiosClient } from "./rest/axiosClient";
import { createApolloClient } from "./graphql/apolloClient";
import { GetMyGroupsDocument, GroupDocument } from "./graphql/generated/graphql";

const API_BASE_URL = "http://localhost:4000";

export class ApiClient {
  readonly axiosClient: AxiosInstance;
  readonly apolloClient: ApolloClient<NormalizedCacheObject>;
  readonly queries = {
    MY_GROUPS: GetMyGroupsDocument,
    GROUP: GroupDocument,
  };

  constructor(baseURL: string) {
    this.axiosClient = createAxiosClient(baseURL);
    this.apolloClient = createApolloClient(baseURL);
  }
}

export default new ApiClient(API_BASE_URL);
