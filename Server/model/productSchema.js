const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ProductName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Subsubcategory: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type: [String],
   
  },
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
