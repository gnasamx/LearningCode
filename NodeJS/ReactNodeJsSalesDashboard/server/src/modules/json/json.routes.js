import { Router } from 'express'
import * as jsonController from './json.controller'

const routes = new Router()

routes.get('/csvtojson', jsonController.csvToJson)

export default routes
