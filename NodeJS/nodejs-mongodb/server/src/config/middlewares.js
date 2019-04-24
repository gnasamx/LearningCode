import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import passport from 'passport'
import express from 'express'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

export default app => {
  if (isProd) {
    app.use(compression())
    app.use(helmet())
  }
  app.use(bodyParser.json())
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATH, DELETE, GET')
      return res.status(200).json({})
    }
    next()
  })
  app.use(passport.initialize())
  app.use('/images', express.static('images'))

  if (isDev) {
    app.use(morgan('dev'))
  }
}
