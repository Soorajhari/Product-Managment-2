import React, { useState } from "react";
import useCategory from "../../hooks/useCategory";
const Addcategory = () => {
  const {
    handleInputChange,
    handleSubcategoryChange,
    handleSubsubcategoryChange,
    handleSubmit,
    handleCategoryClick,
    suggestedCategories,
    categoryValue,
    handleSubCategoryClick,
    subcategoryValue,
    suggestedSubcategories,
    suggestedSubsubcategories,
    handleSubsubCategoryClick,
    SubsubcategoryValue,
  } = useCategory();

  return (
    <div className="flex font-[Ubuntu] justify-center items-center   2xl:min-h-screen">
      <div className="w-[400px] bg-[#ffff]  h-[430px] mt-20 md:mt-10 2xl:mt-0 rounded-2xl shadow-2xl">
        <div className="mx-auto text-center">
          <h2 className="mt-10 text-3xl font-semibold">Add Category</h2>
        </div>
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              id="categoryInput"
              placeholder="Category"
              required
              value={categoryValue}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {suggestedCategories.length > 0 && (
              <ul className="absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md">
                {suggestedCategories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="categoryInput"
              placeholder="Sub-category"
              required
              value={subcategoryValue}
              onChange={handleSubcategoryChange}
              className="w-full px-4 py-2 border mt-10 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {suggestedSubcategories.length > 0 && (
              <ul className="absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md">
                {suggestedSubcategories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSubCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <input
              type="text"
              id="categoryInput"
              required
              placeholder="Sub-subcategory"
              value={SubsubcategoryValue}
              onChange={handleSubsubcategoryChange}
              className="w-full px-4 py-2 border mt-10 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {suggestedSubsubcategories.length > 0 && (
              <ul className="absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md">
                {suggestedSubsubcategories.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSubsubCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex justify-center gap-x-6 mt-10">
            <button
              className="bg-red-500 w-[80px] rounded-2xl h-[40px]"
              onClick={(e) => handleSubmit(e)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcategory;
