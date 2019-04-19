import express from 'express'
import middlewaresConfig from './config/middlewares'
import apiRoutes from './modules'

const app = express()

middlewaresConfig(app)

app.get('/', (req, res) => {
  res.send('Hello World')
})

apiRoutes(app)

app.listen(8080, err => {
  if (err) {
    throw err
  } else {
    console.log(`Server running on port: 8080
        ---
        Running on ${process.env.NODE_ENV}
    `)
  }
})
