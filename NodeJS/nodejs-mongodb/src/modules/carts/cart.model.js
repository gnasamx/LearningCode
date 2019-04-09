import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product added in cart should have name'],
    trim: true
  },
  details: {
    type: String,
    required: [true, 'Product added in cart should have description'],
    trim: true
  },
  price: {
    type: Number,
    required: ['Product added in cart should have price'],
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  image: {
    type: String,
    required: [true, 'Product added in cart should have image']
  }
})

export default mongoose.model('Cart', CartSchema)
