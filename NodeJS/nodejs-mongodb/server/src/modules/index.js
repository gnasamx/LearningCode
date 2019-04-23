import userRoutes from './users/user.routes'
import productRoutes from './products/product.routes'
import cartRoutes from './carts/cart.routes'
import { authJwt } from '../services/auth.services'

export default app => {
  
  // Authentication route
  app.use('/api/v1/user', userRoutes)

  // Test the private route
  app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route')
  })

  // Add product (by Admin) route
  app.use('/api/v1/products', productRoutes)

  // Add product to cart
  app.use('/api/v1/cart', cartRoutes)

  // Handles error route
  app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 400
    next(error)
  })

  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
      error: true,
      message: error.message
    })
  })
}
