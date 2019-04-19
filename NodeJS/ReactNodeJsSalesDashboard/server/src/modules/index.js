import jsonRoutes from './json/json.routes'

export default app => {
  app.use('/api/v1', jsonRoutes)
}
