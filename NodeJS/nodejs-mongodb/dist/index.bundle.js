module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-dev',\n  JWt_SECRET: 'This$Is$Secret'\n};\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-test'\n};\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/nodejs-mongodb-prod'\n};\nconst defaultConfig = {\n  PORT: process.env.POST || 8000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    case 'production':\n      return prodConfig;\n  }\n}\n\nexports.default = { ...defaultConfig,\n  ...envConfig(\"development\")\n};\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_mongoose2.default.Promise = global.Promise;\n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL);\n} catch (error) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once('open', () => console.log('MongoDB Running')).on('error', error => {\n  throw error;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({\n    extended: true\n  }));\n  app.use(_passport2.default.initialize());\n  app.use('/images', _express2.default.static('images'));\n\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middlewares = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n\nvar _middlewares2 = _interopRequireDefault(_middlewares);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\n(0, _middlewares2.default)(app);\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});\n(0, _modules2.default)(app);\napp.listen(_constants2.default.PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`Server running on port: ${_constants2.default.PORT}\n        ---\n        Running on ${\"development\"}\n        ---\n        `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/carts/cart.controller.js":
/*!**********************************************!*\
  !*** ./src/modules/carts/cart.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addProductToCart = addProductToCart;\nexports.updateCartProduct = updateCartProduct;\nexports.fetchAllCartProducts = fetchAllCartProducts;\n\nvar _cart = __webpack_require__(/*! ./cart.model */ \"./src/modules/carts/cart.model.js\");\n\nvar _cart2 = _interopRequireDefault(_cart);\n\nvar _product = __webpack_require__(/*! ../products/product.model */ \"./src/modules/products/product.model.js\");\n\nvar _product2 = _interopRequireDefault(_product);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function addProductToCart(req, res) {\n  try {\n    const product = await _product2.default.findById(req.params.id);\n    let newCartProduct = new _cart2.default({\n      _id: product._id,\n      name: product.name,\n      price: product.price,\n      details: product.details,\n      image: product.image\n    });\n    console.log(`final newCartProduct ${newCartProduct}`);\n    await newCartProduct.save();\n    res.status(201).json({\n      cartProduct: newCartProduct,\n      message: 'Product added to cart'\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to add product into cart'\n    });\n  }\n}\n\nasync function updateCartProduct(req, res) {\n  try {\n    const isProductAlreadyInCart = await _cart2.default.findById(req.params.id);\n    console.log(isProductAlreadyInCart);\n\n    if (isProductAlreadyInCart) {\n      Object.keys(req.body).forEach(key => {\n        console.log(req.body);\n        isProductAlreadyInCart[key] = req.body[key];\n      });\n      console.log(`final isProductAlreadyInCart ${isProductAlreadyInCart}`);\n      await isProductAlreadyInCart.save();\n      res.status(201).json({\n        cartProduct: isProductAlreadyInCart,\n        message: 'Product added to cart'\n      });\n    }\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to update product into cart'\n    });\n  }\n}\n\nasync function fetchAllCartProducts(req, res) {\n  try {\n    return res.status(200).json({\n      cartProducts: await _cart2.default.find({})\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to fetch all cart products'\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/carts/cart.controller.js?");

/***/ }),

/***/ "./src/modules/carts/cart.model.js":
/*!*****************************************!*\
  !*** ./src/modules/carts/cart.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst CartSchema = new _mongoose.Schema({\n  name: {\n    type: String,\n    required: [true, 'Product added in cart should have name'],\n    trim: true\n  },\n  details: {\n    type: String,\n    required: [true, 'Product added in cart should have description'],\n    trim: true\n  },\n  price: {\n    type: Number,\n    required: ['Product added in cart should have price'],\n    trim: true\n  },\n  quantity: {\n    type: Number,\n    required: true,\n    default: 1\n  },\n  image: {\n    type: String,\n    required: [true, 'Product added in cart should have image']\n  }\n});\nexports.default = _mongoose2.default.model('Cart', CartSchema);\n\n//# sourceURL=webpack:///./src/modules/carts/cart.model.js?");

/***/ }),

/***/ "./src/modules/carts/cart.routes.js":
/*!******************************************!*\
  !*** ./src/modules/carts/cart.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _cart = __webpack_require__(/*! ./cart.controller */ \"./src/modules/carts/cart.controller.js\");\n\nvar cartController = _interopRequireWildcard(_cart);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\nroutes.post('/create/:id', cartController.addProductToCart);\nroutes.post('/update/:id', cartController.updateCartProduct);\nroutes.get('', cartController.fetchAllCartProducts);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/carts/cart.routes.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _product = __webpack_require__(/*! ./products/product.routes */ \"./src/modules/products/product.routes.js\");\n\nvar _product2 = _interopRequireDefault(_product);\n\nvar _cart = __webpack_require__(/*! ./carts/cart.routes */ \"./src/modules/carts/cart.routes.js\");\n\nvar _cart2 = _interopRequireDefault(_cart);\n\nvar _auth = __webpack_require__(/*! ../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  // Authentication route\n  app.use('/api/v1/users', _user2.default); // Test the private route\n\n  app.get('/hello', _auth.authJwt, (req, res) => {\n    res.send('This is a private route');\n  }); // Add product (by Admin) route\n\n  app.use('/api/v1/products', _product2.default); // Add product to cart\n\n  app.use('/api/v1/cart', _cart2.default); // Handles error route\n\n  app.use((req, res, next) => {\n    const error = new Error('Not Found');\n    error.status = 400;\n    next(error);\n  });\n  app.use((error, req, res, next) => {\n    res.status(error.status || 500);\n    res.json({\n      error: true,\n      message: error.message\n    });\n  });\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/products/product.controller.js":
/*!****************************************************!*\
  !*** ./src/modules/products/product.controller.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addProduct = addProduct;\nexports.fetchAllProducts = fetchAllProducts;\nexports.getProductById = getProductById;\nexports.updateProduct = updateProduct;\nexports.deleteProduct = deleteProduct;\n\nvar _product = __webpack_require__(/*! ./product.model */ \"./src/modules/products/product.model.js\");\n\nvar _product2 = _interopRequireDefault(_product);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function addProduct(req, res) {\n  try {\n    const product = new _product2.default({\n      _id: new _mongoose2.default.Types.ObjectId(),\n      name: req.body.name,\n      details: req.body.details,\n      price: req.body.price,\n      image: req.file.path\n    });\n    await product.save();\n    return res.status(201).json({\n      product: product,\n      message: 'Product added'\n    });\n  } catch (error) {\n    return res.status(error.status).json({\n      error: error,\n      message: 'Failed to add product into database'\n    });\n  }\n}\n\nasync function fetchAllProducts(req, res) {\n  try {\n    return res.status(200).json({\n      products: await _product2.default.find({})\n    });\n  } catch (error) {\n    return res.status(error.status).json({\n      error: error,\n      message: 'Failed to fetch all products from database'\n    });\n  }\n}\n\nasync function getProductById(req, res) {\n  try {\n    const singleProduct = await _product2.default.findById(req.params.id).populate('product');\n\n    if (singleProduct) {\n      console.log(`SingleProduct: ${singleProduct}`);\n      res.status(200).json({\n        singleProduct\n      });\n    }\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to populate given product id'\n    });\n  }\n}\n\nasync function updateProduct(req, res) {\n  try {\n    const updateSingleProduct = await _product2.default.findById(req.params.id);\n\n    if (updateSingleProduct) {\n      Object.keys(req.body).forEach(key => {\n        updateSingleProduct[key] = req.body[key];\n      });\n      return res.status(200).json((await updateSingleProduct.save()));\n    }\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to update product'\n    });\n  }\n}\n\nasync function deleteProduct(req, res) {\n  try {\n    const deleteSingleProduct = await _product2.default.findById(req.params.id);\n\n    if (deleteSingleProduct) {\n      deleteSingleProduct.remove();\n      return res.status(200).json({\n        message: 'Product deleted'\n      });\n    }\n  } catch (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Failed to delete product'\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/products/product.controller.js?");

/***/ }),

/***/ "./src/modules/products/product.model.js":
/*!***********************************************!*\
  !*** ./src/modules/products/product.model.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ProductSchema = new _mongoose.Schema({\n  name: {\n    type: String,\n    required: [true, 'Product name is required'],\n    trim: true\n  },\n  details: {\n    type: String,\n    required: [true, 'Product description is required'],\n    trim: true\n  },\n  price: {\n    type: Number,\n    required: ['Product cost is required'],\n    trim: true\n  },\n  image: {\n    type: String,\n    required: [true, 'Product image is required']\n  }\n});\nexports.default = _mongoose2.default.model('Product', ProductSchema);\n\n//# sourceURL=webpack:///./src/modules/products/product.model.js?");

/***/ }),

/***/ "./src/modules/products/product.routes.js":
/*!************************************************!*\
  !*** ./src/modules/products/product.routes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _product = __webpack_require__(/*! ./product.controller */ \"./src/modules/products/product.controller.js\");\n\nvar productController = _interopRequireWildcard(_product);\n\nvar _multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar _multer2 = _interopRequireDefault(_multer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\n// Set image storage and filename\nconst multerStorage = _multer2.default.diskStorage({\n  destination: function (req, file, cb) {\n    cb(null, './images/');\n  },\n  filename: function (req, file, cb) {\n    cb(null, new Date().toISOString() + file.originalname);\n  }\n});\n\nconst fileFilter = (req, file, cb) => {\n  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {\n    cb(null, true);\n  } else {\n    cb(new Error('Can store only jpeg & png product images! Check your image file type.'), false);\n  }\n};\n\nconst productImage = (0, _multer2.default)({\n  storage: multerStorage,\n  limits: {\n    fileSize: 1024 * 1024 * 5\n  },\n  fileFilter: fileFilter\n});\nconst routes = new _express.Router();\nroutes.post('/create', productImage.single('image'), productController.addProduct);\nroutes.get('', productController.fetchAllProducts);\nroutes.get('/:id', productController.getProductById);\nroutes.patch('/update/:id', productController.updateProduct);\nroutes.delete('/delete/:id', productController.deleteProduct);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/products/product.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.controller.js":
/*!**********************************************!*\
  !*** ./src/modules/users/user.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(201).json(user);\n  } catch (error) {\n    return res.status(500).json(error);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(200).json(req.user.toJSON());\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controller.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _user = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n\n      message: `{VALUE} is not a valid email!`\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'Last name is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    unique: true,\n    trim: true,\n    required: [true, 'Username is required!']\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minlength: [6, 'Password need to be longer!'],\n    validate: {\n      validator(password) {\n        return _user.passwordReg.test(password);\n      },\n\n      message: 'Password is not a valid password! Must have uppercase, lowercase, numbers! '\n    }\n  }\n});\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n    return next();\n  }\n\n  return next();\n});\nUserSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n\n  authenticateUser(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n\n  createToken() {\n    return _jsonwebtoken2.default.sign({\n      _id: this._id\n    }, 'secret');\n  },\n\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: `JWT ${this.createToken()}`\n    };\n  }\n\n};\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _user = __webpack_require__(/*! ./user.controller */ \"./src/modules/users/user.controller.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\nroutes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\nroutes.post('/login', _auth.authLocal, userController.login);\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\nexports.default = {\n  signup: {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    firstName: _joi2.default.string().required(),\n    lastName: _joi2.default.string().required(),\n    userName: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = exports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst localOpts = {\n  usernameField: 'email'\n};\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({\n      email\n    });\n\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n\n    return done(null, user);\n  } catch (error) {\n    return done(error, false);\n  }\n});\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme(\"jwt\"),\n  secretOrKey: 'secret'\n};\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    const user = await _user2.default.findById(payload._id);\n\n    if (!user) {\n      return null, false;\n    }\n\n    return done(null, user);\n  } catch (error) {\n    return done(error.false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n\n_passport2.default.use(jwtStrategy);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', {\n  session: false\n});\n\nconst authJwt = exports.authJwt = _passport2.default.authenticate('jwt', {\n  session: false\n});\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });