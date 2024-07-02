const express = require('express');
const { getProducts } = require('../controllers/productController');
const productRouter = express().Router();


productRouter.get('/products', getProducts);



module.exports = productRouter;

