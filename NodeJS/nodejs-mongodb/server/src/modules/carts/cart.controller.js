import Cart from './cart.model'

export async function addProductToCart(req, res) {
  try {
    // Find the cart id and add the product in array with default quantity 1
    const cart = await Cart.findOneAndUpdate(
      { _id: req.params.cartId },
      {
        $addToSet: { products: { _id: req.params.productId, quantity: 1 } }
      }
    ).populate('Cart')

    return res.status(200).json({
      cart: cart,
      message: 'Product added in your cart'
    })
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to add product into cart' })
  }
}

export async function updateCartProduct(req, res) {
  try {
    // Find single product from cart products array
    const singleProduct = await Cart.find(
      {
        _id: req.params.cartId,
        'products._id': req.params.productId
      },
      { 'products.$': 1 }
    )

    if (singleProduct) {
      let { products } = singleProduct[0]
      let { quantity, _id } = products[0]

      // Update the quantity of product

      if (req.body.quantity > 0) {
        if (quantity !== req.body.quantity) {
          await Cart.updateOne(
            { _id: req.params.cartId, 'products._id': req.params.productId },
            { $set: { 'products.$.quantity': req.body.quantity } }
          )
        }
      }
      return res.status(202).json({
        error: false,
        message: 'Product updated successfully'
      })
    } else {
      res.status(400).json({
        error: true,
        message: 'Cart or Product not found'
      })
    }
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
