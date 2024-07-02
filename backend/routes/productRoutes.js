const express = require('express');
const { getProducts } = require('../controllers/productController');
const Router = express();


Router.get('/products', getProducts);



module.exports = Router;

