import Product from './product.model'

export async function addProduct(req, res) {
  try {
    const product = await Product.create(req.body)
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
