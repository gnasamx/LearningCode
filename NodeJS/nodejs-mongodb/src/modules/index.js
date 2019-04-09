import userRoutes from './users/user.routes'
import productRoutes from './products/product.routes'
import { authJwt } from '../services/auth.services'

export default app => {
  // Authentication route
  app.use('/api/v1/users', userRoutes)

  // Test the private route
  app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route')
  })

  // Add product (by Admin) route
  app.use('/api/v1/products', productRoutes)

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
