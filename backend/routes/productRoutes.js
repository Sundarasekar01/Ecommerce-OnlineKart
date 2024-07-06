const express = require("express");
const router = express();

const {
  getProducts,
  addProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/products", getProducts);
router.post("/products/add", addProduct);

router.get("/products/:id", getSingleProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
