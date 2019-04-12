import Cart from './cart.model'
import Product from '../products/product.model'

export async function addProductToCart(req, res) {
  try {
    const product = await Product.findById(req.params.id)
    let newCartProduct = new Cart({
      _id: product._id,
      name: product.name,
      price: product.price,
      details: product.details,
      image: product.image
    })
    console.log(`final newCartProduct ${newCartProduct}`)
    await newCartProduct.save()
    res.status(201).json({
      cartProduct: newCartProduct,
      message: 'Product added to cart'
    })
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to add product into cart' })
  }
}

export async function updateCartProduct(req, res) {
  try {
    const isProductAlreadyInCart = await Cart.findById(req.params.id)
    const product = await Product.findById(req.params.id)
    console.log(isProductAlreadyInCart)
    if (isProductAlreadyInCart) {
      Object.keys(req.body).forEach(key => {
        console.log(req.body)
        isProductAlreadyInCart[key] = req.body[key]
      })
      isProductAlreadyInCart['price'] = req.body.quantity * product['price']
      console.log(`final isProductAlreadyInCart ${isProductAlreadyInCart}`)
      await isProductAlreadyInCart.save()
      res.status(201).json({
        cartProduct: isProductAlreadyInCart,
        message: 'Product added to cart'
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
