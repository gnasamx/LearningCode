import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
})

export default mongoose.model('Cart', CartSchema)
