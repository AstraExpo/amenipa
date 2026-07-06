import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import {
  routerWithApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-tanstack-start";
import { HttpLink } from "@apollo/client";
import { routeTree } from "./routeTree.gen"

export function getRouter() {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ 
      // Point this to your internal API route
      uri: "http://localhost:3005/api/graphql" 
    }),
  });

  const router = createTanStackRouter({
    routeTree,
    context: {
      ...routerWithApolloClient.defaultContext,
    },
  });

  return routerWithApolloClient(router, apolloClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
