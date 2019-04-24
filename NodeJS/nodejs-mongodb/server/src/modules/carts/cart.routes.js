import { Router } from 'express'
import * as cartController from './cart.controller'
import { authJwt } from '../../services/auth.services'

const routes = new Router()

// routes.post('/create', authJwt, cartController.createCartForSignupUser)
routes.post('/:cartId/create/:productId', cartController.addProductToCart)
routes.post('/:cartId/update/:productId', cartController.updateCartProduct)
routes.get('', cartController.fetchAllCartProducts)

export default routes
