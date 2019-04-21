import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})



CartSchema.statics.addProductToCart = async function(productData, cartId) {
  const Product = mongoose.model('Product')
  const product = await new Product({ ...productData, cart: cartId })
  await this.findByIdAndUpdate(cartId, { $push: { products: product.id } })
  return {
    product: await product.save()
  }
}

export default mongoose.model('Cart', CartSchema)
