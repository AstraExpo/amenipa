import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    name: String
    posts: [Post!]!
  }

  type Post {
    id: Int!
    title: String!
    content: String
    published: Boolean!
    author: User!
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input CreatePostInput {
    title: String!
    content: String
    authorId: Int!
  }

  type Query {
    getUsers: [User!]!
    getUser(id: Int!): User
    getPosts: [Post!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createPost(input: CreatePostInput!): Post!
    deleteUser(id: Int!): Boolean!
  }
`