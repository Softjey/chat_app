import { getAccessToken } from "@/app/api/auth/_actions";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql", credentials: "include" });
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  const isUnauthorized = graphQLErrors?.some((err) => err.extensions?.code === "UNAUTHENTICATED");

  if (isUnauthorized) {
    return new Observable((observer) => {
      const repeatRequestWithNewToken = (newAccessToken: string | null) => {
        if (!newAccessToken) {
          throw new Error("No access token available, check your authentication flow.");
        }

        operation.setContext(({ headers = {} }) => ({
          headers: { ...headers, Authorization: `Bearer ${newAccessToken}` },
        }));

        const subscriber = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });

        return () => subscriber.unsubscribe();
      };

      getAccessToken()
        .then(repeatRequestWithNewToken)
        .catch((error) => observer.error(error));
    });
  }

  if (networkError || graphQLErrors) {
    const error = networkError ?? graphQLErrors;

    return new Observable((observer) => observer.error(error));
  }

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
