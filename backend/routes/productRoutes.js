const express = require('express');
const { getProducts, addProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express();


router.get('/products', getProducts);
router.post('/products/add', addProduct);

router.get('/products/:id', getSingleProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;

