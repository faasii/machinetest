var express = require('express');
var router = express.Router();

const productController = require('../controller/productController')


router.post('/get/products',productController.listAllProduct)
router.post('/create/product',productController.createProduct)


module.exports = router;
