const mongoose = require('mongoose');

const categoryProductSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  subcategories: [{
    name: {
      type: String,
      required: true,
    },
    subsubcategories: [{
      name: {
        type: String,
        required: true,
      },
    }],
  }],
});


const CategoryProduct = mongoose.model('CategoryProduct', categoryProductSchema);

module.exports = CategoryProduct;
