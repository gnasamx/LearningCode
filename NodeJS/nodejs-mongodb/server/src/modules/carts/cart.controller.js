import Cart from './cart.model'
import Product from '../products/product.model'

// Create cart for each user when sign up
export async function createCartForSignupUser(req, res) {
  try {
    let cart = await Cart.createCart(req.user._id)
    console.log(cart, req.user._id)
    return res.status(201).json({
      cart: cart,
      message: 'Cart is created for you'
    })
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: 'Something went wrong while creating cart'
    })
  }
}

export async function addProductToCart(req, res) {
  // try {
  //   const isProductAlreadyInCart = await Cart.findById(req.params.id)
  //   if (!isProductAlreadyInCart) {
  //     const product = await Product.findById(req.params.id)
  //     let newCartProduct = new Cart({
  //       _id: product._id,
  //       name: product.name,
  //       price: product.price,
  //       details: product.details,
  //       image: product.image
  //     })
  //     console.log(`final newCartProduct ${newCartProduct}`)
  //     await newCartProduct.save()
  //     res.status(201).json({
  //       cartProduct: newCartProduct,
  //       message: 'Product added to cart'
  //     })
  //   } else {
  //     res.status(201).json({
  //       cartProduct: isProductAlreadyInCart,
  //       message: 'Product already added to your cart'
  //     })
  //   }
  // } catch (error) {
  //   return res
  //     .status(400)
  //     .json({ error: error, message: 'Failed to add product into cart' })
  // }

  try {
    const product = Product.findOne(req.params.id).populate('product')
    console.log(`Got product ${product}`)
    


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
