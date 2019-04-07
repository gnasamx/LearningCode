import { Router } from 'express'

import * as productController from './product.controller'

import multer from 'multer'

// Set image storage and filename
const multerStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './images/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(
      new Error(
        'Can store only jpeg & png product images! Check your image file type.'
      ),
      false
    )
  }
}

const productImage = multer({
  storage: multerStorage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

const routes = new Router()

routes.post(
  '/create',
  productImage.single('image'),
  productController.addProduct
)
routes.get('', productController.fetchAllProducts)

export default routes
