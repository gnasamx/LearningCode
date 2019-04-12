const devConfig = {
  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-dev',
  JWt_SECRET: 'This$Is$Secret'
}

const testConfig = {
  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-test'
}

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-prod'
}

const defaultConfig = {
  PORT: process.env.POST || 8000
}

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    case 'production':
      return prodConfig
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}
