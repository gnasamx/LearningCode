import mongoose, { Schema } from 'mongoose'
import validator from 'validator'
import { passwordReg } from './user.validations'

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required!'],
    trim: true,
    validate: {
      validator(email) {
        return validator.isEmail(email)
      },
      message: `{VALUE} is not a valid email!`
    }
  },
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    trim: true
  },
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Username is required!']
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    trim: true,
    minlength: [6, 'Password need to be longer!'],
    validate: {
      validator(password) {
        return passwordReg.test(password)
      },
      message:
        'Password is not a valid password! Must have uppercase, lowercase, numbers! '
    }
  }
})

export default mongoose.model('User', userSchema)
