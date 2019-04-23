import User from './user.model'

export async function signUp(req, res) {
  try {
    console.log('Inside try')
    const user = await User.create(req.body)
    console.log('user:', user)
    console.log('userId:', user._id)
    const cart = await User.createCart(user._id)
    console.log('cart:', cart)

    return res.status(201).json({
      user: user,
      cart: cart,
      message: 'Successfully sign up'
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

export function login(req, res, next) {
  try {
    console.log(req.body)
    res.status(200).json(req.user.toJSON())
    return next()
  } catch (error) {
    return res.status(400).json({ error: error, message: 'Login failed' })
  }
}
