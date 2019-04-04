import mongoose, { Schema } from 'mongoose'
import validator from 'validator'
import { hashSync, compareSync } from 'bcrypt-nodejs'
import { passwordReg } from './user.validations'
import jwt from 'jsonwebtoken'
import constants from '../../config/constants'

const UserSchema = new Schema({
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
  userName: {
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

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password)
    return next()
  }
  return next()
})

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password)
  },
  authenticateUser(password) {
    return compareSync(password, this.password)
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      'secret'
    )
  },
  toJSON() {
    return {
      _id: this._id,
      userName: this.userName,
      token: `JWT ${this.createToken()}`
    }
  }
}

export default mongoose.model('User', UserSchema)
