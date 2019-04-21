import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  details: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: ['Product cost is required'],
    trim: true
  },
  image: { type: String, required: [true, 'Product image is required'] },
  cart: [{
    type: Schema.Types.ObjectId,
    ref: 'Cart'
  }]
})

export default mongoose.model('Product', ProductSchema)
