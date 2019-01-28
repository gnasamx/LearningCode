const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const {buildSchema} = require('graphql')

const app = express()

app.use(bodyParser.json())

/**
 * Here we will configured our GraphQL API,
 * `express-graphql` package require some information pieces from us, like where
 * do I find your schema(_schema_) which defines the endpoints you can handle which defines
 * the queries you can handle, where do I find the resolvers(_rootValue_) to which my request
 * should be forwarded once I identified the query this request wants to execute.
 */
app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
      type RootQuery {
        events: [String!]!
      }

      type RootMutation {
        createEvent(name: String): String
      }

      schema {
        query: RootQuery
        mutation: RootMutation 
      }
    `),
    rootValue: {
      events: () => {
        return ['Romantic Cooking', 'Sailing', 'All-Night Coding']
      },
      createEvent: args => {
        const eventName = args.name
        return eventName
      },
    },
    graphiql: true,
  }),
)

app.listen(3000)
