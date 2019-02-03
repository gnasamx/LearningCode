const { ApolloServer, gql } = require('apollo-server')

/**
 * Type Checking
 * Query vs. Mutation
 * Arrays
 * Object
 * Arguments
 */

/**
 * Type Checking: Anything you put in your type definitions graphql is going to check the type of it or
 * at least it is going to try casting it to that type.
 */

const typeDefs = gql`
  type Query {
    hello: String!
    user: User!
  }

  type User {
    id: ID!
    username: String!
  }

  type Error {
    field: String!
    message: String!
  }

  type RegisterResponse {
    errors: [Error]
    user: User!
  }

  input UserInfo {
    username: String!
    password: String!
    age: Int
  }

  type Mutation {
    register(userInfo: UserInfo): RegisterResponse!
    login(userInfo: UserInfo): Boolean!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    user: () => ({
      id: 1,
      username: 'Bob',
    }),
  },
  Mutation: {
    login: () => true,
    register: () => ({
      errors: [
        {
          field: 'username',
          message: 'Bad',
        },
      ],
      user: {
        id: 1,
        username: 'Bob',
      },
    }),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => console.log(`Server started at ${url}`))
