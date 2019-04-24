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

    console.log(product)

    await product.save()

    return res.status(201).json({
      product: product,
      message: 'Product added'
    })
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to add product into database' })
  }
}

export async function fetchAllProducts(req, res) {
  try {
    return res.status(200).json({
      products: await Product.find({})
    })
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: 'Failed to fetch all products from database'
    })
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

export async function updateProduct(req, res) {
  try {
    const updateSingleProduct = await Product.findById(req.params.id)
    if (updateSingleProduct) {
      Object.keys(req.body).forEach(key => {
        updateSingleProduct[key] = req.body[key]
      })
      return res.status(200).json(await updateSingleProduct.save())
    }
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to update product' })
  }
}

export async function deleteProduct(req, res) {
  try {
    const deleteSingleProduct = await Product.findById(req.params.id)
    if (deleteSingleProduct) {
      deleteSingleProduct.remove()
      return res.status(200).json({ message: 'Product deleted' })
    }
  } catch (error) {
    return res
      .status(400)
      .json({ error: error, message: 'Failed to delete product' })
  }
}
