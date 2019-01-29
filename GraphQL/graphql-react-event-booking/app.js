const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

const events = []

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
      type Event {
        _id:ID!
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
      }

      type RootQuery {
        events: [Event!]!
      }

      type RootMutation {
        createEvent(eventInput: EventInput): Event
      }

      schema {
        query: RootQuery
        mutation: RootMutation 
      }
    `),
    rootValue: {
      events: () => {
        return events
      },
      createEvent: args => {
        const event = {
          _id: Math.random().toString(),
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: args.eventInput.date,
        }
        events.push(event)
        return event
      },
    },
    graphiql: true,
  }),
)

app.listen(3000)
