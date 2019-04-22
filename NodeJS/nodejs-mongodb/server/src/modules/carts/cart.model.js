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
})


export default mongoose.model('Cart', CartSchema)
