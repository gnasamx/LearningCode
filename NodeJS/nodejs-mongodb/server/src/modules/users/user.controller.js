import User from './user.model'
import Cart from '../carts/cart.model'

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body)

    return res.status(201).json({
      user: user,
      message: 'Successfully sign up'
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export function login(req, res, next) {
  try {
    console.log(req.body)
    res.status(200).json(req.user.toJSON())
    return next()
  } catch (error) {
    return res.status(500).json({ error: error, message: 'Login failed' })
  }
}
