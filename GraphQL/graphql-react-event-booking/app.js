const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

const isAuth = require('./middleware/is-auth')

const app = express()

app.use(bodyParser.json())

app.use(isAuth)

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
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  }),
)

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-afdj7.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
  )
  .then(() => {
    app.listen(3000)
  })
  .catch(err => {
    console.log(err)
  })
