import Cart from './cart.model'
import Product from '../products/product.model'

export async function addProductToCart(req, res) {
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.params.cartId },
      {
        $addToSet: { products: { _id: req.params.productId, quantity: 1 } }
      }
    ).populate('Cart')

    return res.status(200).json({
      cart: cart,
      message: 'Product to added in your cart'
    })
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to add product into cart' })
  }
}

export async function updateCartProduct(req, res) {
  try {
    // const cart = await Cart.findOne({ _id: req.params.cartId })
    // console.log(req.params.productId)

    // const updatedProduct = cart.products.some(p => {
    //   // console.log(p._id)
    //   // console.log(req.params.productId)
    //   if(p._id === req.params.productId) {
    //     return p
    //   }
    // })
    // console.log('UP: ', updatedProduct[0])

    // const product = await Product.findById(req.params.id)
    // console.log(isProductAlreadyInCart)
    // if (isProductAlreadyInCart) {
    //   Object.keys(req.body).forEach(key => {
    //     console.log(req.body)
    //     isProductAlreadyInCart[key] = req.body[key]
    //   })
    //   isProductAlreadyInCart['price'] = req.body.quantity * product['price']
    //   console.log(`final isProductAlreadyInCart ${isProductAlreadyInCart}`)
    //   await isProductAlreadyInCart.save()
    //   res.status(201).json({
    //     cartProduct: isProductAlreadyInCart,
    //     message: 'Product added to cart'
    //   })
    // }
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to update product into cart' })
  }
}

export async function fetchAllCartProducts(req, res) {
  try {
    return res.status(200).json({
      cartProducts: await Cart.find({})
    })
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to fetch all cart products' })
  }
}
