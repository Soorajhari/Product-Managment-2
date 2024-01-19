const productModel = require("../model/productSchema");

const addProduct = async (req, res) => {
  try {
    const {
      ProductName,
      category,
      price,
      subCategory,
      total,
      description,
      Subsubcategory,
    } = req.body;
    // console.log(
    //   ProductName,
    //   category,
    //   price,
    //   subCategory,
    //   total,
    //   description,
    //   Subsubcategory
    // );
    const images = req.files;
    console.log(images);
    const imagePaths = [];

    for (const image of images) {
      imagePaths.push(image.filename);
    }

    const Product = new productModel({
      ProductName,
      category,
      price,
      subCategory,
      total,
      description,
      Subsubcategory,
      imagePath: imagePaths,
    });
    await Product.save();

    res
      .status(200)
      .json({ status: "ok", message: "product added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterProducts = async (req, res) => {
  try {
    if (req.body.categories.length > 0) {
      const filters = req.body.categories.map(
        (category) => new RegExp(category, "i")
      );
      // console.log()
      const searchedProducts = await productModel
        .find({ Subsubcategory: { $in: filters } })
        .exec();
      res.json({ status: "ok", filterData: searchedProducts });
    } else {
      const allProducts = await productModel.find()
      console.log(allProducts)
      res.json({ status: "ok", filterData: allProducts });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "error occurred" });
  }
};



const filterProductData = async (req, res) => {
  try {
    if (req.body.updatedCategories.length > 0) {
      const filters = req.body.updatedCategories.map(
        (category) => new RegExp(category, "i")
      );
      console.log(req.body.updatedCategories)
      const searchedProducts = await productModel
        .find({ Subsubcategory: { $in: filters } })
        .exec();
        console.log(searchedProducts)
      res.json({ status: "ok", filterData: searchedProducts });
    } else {
      const allProducts = await productModel.find()
      console.log(allProducts)
      res.json({ status: "ok", filterData: allProducts });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "error occurred" });
  }
};

















const getProduct = async (req, res) => {
  try {
    const productData = await productModel.find();
    // console.log(productData);
    res.json({ status: "ok", data: productData });
  } catch (error) {
    console.log(error.message);
  }
};

const Search = async (req, res) => {
  try {
    const search = req.body.search;
    // console.log(search);
    const searchPattern = new RegExp(search, "i");
    const searchedProducts = await productModel
      .find({ ProductName: searchPattern })
      .exec();
    // console.log(searchedProducts);
    res.json({ status: "ok", Product: searchedProducts });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "error occured" });
  }
};

module.exports = {
  addProduct,
  filterProducts,
  getProduct,
  Search,filterProductData
};
