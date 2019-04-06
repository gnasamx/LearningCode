import { Router } from 'express'

import * as productController from './product.controller'

const routes = new Router()

routes.post('/create', productController.addProduct)
routes.get('', productController.fetchAllProducts)

export default routes
