const Product = require("../model/productModel");
const Errorhandler = require("../utils/errorhandler");
const asyncErrorHandler = require("../middleware/asyncerrorhandler");

// create product -- only for admin
exports.createProduct = asyncErrorHandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// get all products
exports.getAllproduct = asyncErrorHandler(async function (req, res) {
  const allProducts = await Product.find();
  res.status(200).json({
    success: true,
    allProducts,
  });
});
// get one produc detials by id
exports.getproductdetails = asyncErrorHandler(async function (req, res, next) {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new Errorhandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// update product
exports.updateProducts = asyncErrorHandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  // if (!product) {
  //   return res.status(500).json({
  //     success: false,
  //     msg: "product is not found",
  //   });
  // } or
  if (!product) {
    return next(new Errorhandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});
// delete product
exports.deleteProduct = asyncErrorHandler(async (req, res, next) => {
  // const product = await Product.findById(req.params.id);
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new Errorhandler("product not found", 404));
  }
  // await product.remove();
  res.status(200).json({
    success: true,
    msg: "Product is deleted",
  });
});
