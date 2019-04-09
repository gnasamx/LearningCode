import Product from './product.model'
import mongoose from 'mongoose'

export async function addProduct(req, res) {
  try {
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      details: req.body.details,
      price: req.body.price,
      image: req.file.path
    })

    await product.save()

    return res.status(201).json({
      product: product,
      message: 'Product added'
    })
  } catch (error) {
    return res
      .status(error.status)
      .json({ error: error, message: 'Failed to add product' })
  }
}

export async function fetchAllProducts(req, res) {
  try {
    return res.status(200).json({
      products: await Product.find({})
    })
  } catch (error) {
    return res
      .status(error.status)
      .json({ error: error, message: 'Failed to fetch all products' })
  }
}

export async function getProductById(req, res) {
  try {
    const singleProduct = await Product.findById(req.params.id).populate(
      'product'
    )
    if (singleProduct) {
      console.log(`SingleProduct: ${singleProduct}`)
      res.status(200).json({
        singleProduct
      })
    }
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to populate given product id' })
  }
}
