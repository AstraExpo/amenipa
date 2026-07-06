import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { typeDefs } from '../../graphql/schema'
import { resolvers } from '../../graphql/resolver'
import { createFileRoute } from '@tanstack/react-router'

// 1. Initialize the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

// 2. Wrap it in the Next/WinterCG compatible handler
const handler = startServerAndCreateNextHandler(server)

// 3. Define the TanStack Server Route
export const Route = createFileRoute('/api/graphql')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Pass the standard Web Request to Apollo
        return handler(request)
      },
      POST: async ({ request }) => {
        return handler(request)
      },
    },
  },
})