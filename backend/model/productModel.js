const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productname: {
    type:String,
    required: [true, "Please enter product name"],
  },
  description: {
    type:String,
    required: [true, "Please enter product description"],
  },
  price: {
    type:Number,
    required: [true, "Please enter product price"],
    maxlength: [6, "Price cannot exceed 6 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  Images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxlength: [4, "Stock cannot exceed 4 characters"],
  },
  numofReview: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      Comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
