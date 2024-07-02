const express = require('express');
const { getProducts } = require('../controllers/productController');
const router = express();


router.get('/products', getProducts);



module.exports = router;

