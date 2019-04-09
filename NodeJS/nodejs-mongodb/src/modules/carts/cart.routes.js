import { Router } from 'express'
import * as cartController from './cart.controller'

const routes = new Router()

routes.post('/create/:id', cartController.addProductToCart)
routes.post('/update/:id', cartController.updateCartProduct)
routes.get('', cartController.fetchAllCartProducts)

export default routes
