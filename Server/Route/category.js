const express = require("express");
const Router = express.Router();
const multer = require("../middleware/multer");
const categoryController = require("../controllers/categoryControllers");
const productController = require("../controllers/productControllers");

Router.post("/add-category", categoryController.addCategory);
Router.get("/get-category", categoryController.getCategory);
Router.get("/get-product", productController.getProduct);
Router.post("/product", multer.single("file"), productController.addProduct);
Router.post("/filter", productController.filterProducts);
Router.post("/filterdata", productController.filterProductData);
Router.post("/search", productController.Search);

module.exports = Router;
