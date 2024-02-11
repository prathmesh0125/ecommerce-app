const Product = require("../model/productModel");

// create product -- only for admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// get all products
exports.getAllproduct = async function (req, res) {
  const allProducts = await Product.find();
  res.status(200).json({
    success: true,
    allProducts,
  });
};

// update product
exports.updateProducts = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "product is not found",
    });
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
};
// delete product
exports.deleteProduct = async (req, res, next) => {
  // const product = await Product.findById(req.params.id);
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "product not found",
    });
  }
  // await product.remove();
  res.status(200).json({
    success: true,
    msg: "Product is deleted",
  });
};
