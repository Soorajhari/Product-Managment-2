const categoryModel = require("../model/categorySchema");

const addCategory = async (req, res) => {
  const { categoryValue, subcategoryValue, SubsubcategoryValue } = req.body;

  try {
    let existingCategory = await categoryModel.findOne({
      category: categoryValue,
    });

    if (!existingCategory) {
      existingCategory = new categoryModel({
        category: categoryValue,
        subcategories: [
          {
            name: subcategoryValue,
            subsubcategories: [
              {
                name: SubsubcategoryValue,
              },
            ],
          },
        ],
      });
    } else {
      const existingSubcategory = existingCategory.subcategories.find(
        (subcategory) => subcategory.name === subcategoryValue
      );

      if (!existingSubcategory) {
        existingCategory.subcategories.push({
          name: subcategoryValue,
          subsubcategories: [
            {
              name: SubsubcategoryValue,
            },
          ],
        });
      } else {
        existingSubcategory.subsubcategories.push({
          name: SubsubcategoryValue,
        });
      }
    }

    await existingCategory.save();

    res
      .status(200)
      .json({ status: "ok", message: "Subcategory added successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: "An error occurred" });
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryData = await categoryModel.find();
    // console.log(categoryData);
    res.json({ status: "ok", data: categoryData });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { addCategory, getCategory };
