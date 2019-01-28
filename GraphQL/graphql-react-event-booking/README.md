## GraphQL React Event Booking App

### :package: Packages

- `express-graphql`: This is GraphQL package that can be used as middleware in
  Express NodeJS application and that allows us to point at a schema at
  resolvers and automatically connect all of that for us and route request to
  parser and then handle them according to our schema and forward them to right
  resolvers.

- `graphql`: This GraphQL package allows us to define the schema and set up a
  schema that follows the official GraphQL specification and definitions and
  that will give us valid schema. It will not just check it but also basically
  convert it to JavaScript code to JavaScript object so that it will parse our
  schema and convert it and we can then use this parsed and converted schema
  together with `express-graphql`.

### :truck: Imports

- `graphqlHttp`

> Imported from `graphql-express`

The `graphql-express` package exports one thing and that thing is graphqlHttp,
which is a function that we can use in the place where express expects a
middleware function. So it basically exports a valid middleware function and
what this middleware function will do is, it will take incoming requests and
funnel them through the graphql query parser and automatically forward them to
right resolvers.

- `buildSchema`

> Imported from `graphql`

Build a GraphQLSchema from a GraphQL schema language document. It is a function
that takes a JavaScript template literal string which we can then use to defines
our schema. So this `buildSchema` function takes a string that string should
define our schema.
