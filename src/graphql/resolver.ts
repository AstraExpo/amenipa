import { prisma } from '@/lib/db'

export const resolvers = {
  Query: {
    getUsers: async () => {
      return await prisma.user.findMany({
        include: { posts: true },
      })
    },
    getUser: async (_: unknown, { id }: { id: number }) => {
      return await prisma.user.findUnique({
        where: { id },
        include: { posts: true },
      })
    },
    getPosts: async () => {
      return await prisma.post.findMany({
        include: { author: true },
      })
    },
  },
  Mutation: {
    createUser: async (_: unknown, { input }: { input: { email: string; name?: string } }) => {
      return await prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
        },
      })
    },
    createPost: async (_: unknown, { input }: { input: { title: string; content?: string; authorId: number } }) => {
      return await prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          authorId: input.authorId,
        },
      })
    },
    deleteUser: async (_: unknown, { id }: { id: number }) => {
      await prisma.user.delete({
        where: { id },
      })
      return true
    },
  },
}