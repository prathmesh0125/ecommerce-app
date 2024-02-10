const express = require("express");
const {
  getAllproduct,
  createProduct,
  updateProducts,
  deleteProduct
} = require("../controllers/productControler");

const router = express.Router();
//all products
router.route("/products").get(getAllproduct);
// create products
router.route("/products/new").post(createProduct);

// update products
router.route("/products/:id").put(updateProducts).delete(deleteProduct)
// router.route("/products/:id").delete(deleteProduct)

module.exports = router;
