import React from "react";
import icon from "../../assets/new.png";
import { getProduct } from "../../functions/getProduct";

import useProduct from "../../hooks/useProduct";

const AddProduct = () => {
  const productData = getProduct();
  const {
    data,
    handleChange,
    handleFileChange,
    values: product,
    selectedFiles,
    selectedCategoryData,
    handleSubmit,
  } = useProduct(productData);

  console.log(selectedCategoryData);
  console.log(data);
  return (
    <div className="flex font-[Ubuntu] justify-center items-center 2xl:min-h-screen ">
      <div className="w-screen md:w-[650px] md:h-[680px] bg-[#ffff] h-auto mt-20 md:mt-10 2xl:mt-0 rounded-2xl   shadow-2xl ">
        <div className="mx-auto text-center ">
          <h2 className="mt-16 text-3xl font-semibold">
            Products{" "}
            <span className="text-gray-500 text-base">(Add new products)</span>
          </h2>
        </div>
        <form>
          <div className="flex mt-9 justify-between ">
            <p className="ml-10 text-xl hidden md:block text-gray-400">
              Product Name:
            </p>
            <div className="mr-12 flex-1">
              <input
                className=" w-full px-3 ml-10 md:ml-6 text-lg  h-[40px] rounded-lg border border-gray-400 "
                type="text"
                placeholder="Product Name"
                onChange={(e) => handleChange(e)}
                name="ProductName"
                value={product.productName}
                required
              />
            </div>
          </div>

          <div className="  flex mt-10 justify-between ">
            <p className="hidden md:block ml-10 text-xl text-gray-400">
              Category:
            </p>
            <div className="flex flex-1 flex-col gap-y-10 md:gap-y-0  md:flex-row mr-12">
              <select
                name="category"
                value={product.category}
                className="text-lg w-full ml-10 md:ml-16 h-[40px] rounded-lg border border-gray-400"
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="" disabled selected>
                  Choose a Category
                </option>

                {data.map((item) => (
                  <React.Fragment>
                    <option key={item._id} value={item.category}>
                      {item.category}
                    </option>
                  </React.Fragment>
                ))}
              </select>

              <input
                className=" text-xl px-3  w-full h-[40px] ml-10 md:ml-5 rounded-lg border border-gray-400"
                type="number"
                placeholder="price"
                onChange={(e) => handleChange(e)}
                name="price"
                value={product.price}
                required
              />
            </div>
          </div>
          {/* <div className="text-red-500 text-center ml-16 mt-2 text-lg">
          {error}
        </div> */}
          <div className="  flex mt-10 justify-between ">
            <p className="hidden md:block ml-10 text-xl text-gray-400">
              Sub-Category:
            </p>
            <div className="flex flex-1 flex-col gap-y-10 md:gap-y-0  md:flex-row mr-12">
              <select
                name="subCategory"
                value={product.subCategory}
                className="text-lg w-full ml-10 md:ml-6 h-[40px] rounded-lg border border-gray-400"
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="" disabled selected>
                  Choose a Sub-Category
                </option>
                {selectedCategoryData &&
                  selectedCategoryData.subcategories.map((subcategory) => (
                    <option key={subcategory._id} value={subcategory.name}>
                      {subcategory.name}
                    </option>
                  ))}
              </select>

              <input
                className=" text-xl px-3  w-full h-[40px] ml-10 md:ml-5 rounded-lg border border-gray-400"
                type="number"
                placeholder="Total Num of products"
                onChange={(e) => handleChange(e)}
                name="total"
                value={product.total}
                required
              />
            </div>
          </div>

          {/* <div className="text-red-500 text-center ml-16 mt-2 text-lg">
          {error}
        </div> */}
          <div className="flex  mt-9 justify-between ">
            <p className="ml-10 text-xl hidden md:block text-gray-400">
              Decription:
            </p>
            <div className="mr-14 flex-1">
              <input
                className="w-full px-3 ml-10 md:ml-12 text-lg  h-[40px] rounded-lg border border-gray-400 "
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Description"
                name="description"
                value={product.description}
                required
              />
            </div>
          </div>

          <div className="flex  mt-9 justify-between">
            <p className="ml-10 text-xl hidden md:block text-gray-400">
              Sub-subCategory:
            </p>
            <div className="mr-14 flex-1">
              <select
                name="Subsubcategory"
                value={product.Subsubcategory}
                className="text-lg w-full ml-10 md:ml-6 h-[40px] rounded-lg border border-gray-400"
                onChange={(e) => handleChange(e)}
                required
              >
                <option value="" disabled selected>
                  Choose a Sub-Category
                </option>
                {selectedCategoryData &&
                  selectedCategoryData.subcategories.map((subcategory) => (
                    <optgroup key={subcategory._id} label={subcategory.name}>
                      {subcategory.subsubcategories.map((subsubcategory) => (
                        <option
                          key={subsubcategory._id}
                          value={subsubcategory.name}
                        >
                          {subsubcategory.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex mt-9  ">
            <p className="ml-10 text-xl text-gray-400 hidden md:block">
              Upload Image:
            </p>
            <label className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer  border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded">
              <img className="" src={icon} alt="gallery" />
              <input
                className=" hidden"
                type="file"
                name="files"
                placeholder=""
                accept=".jpg,.png"
                      
                onChange={(e) => handleFileChange(e)}
                multiple
              />
            </label>
            {selectedFiles.map((file, index) => (
              <div className="text-center ml-8 text-lg flex justify-center items-center cursor-pointer  border-dashed border border-gray-500 h-[70px] w-[70px] py-2 px-4 rounded">
                <img
                  className="selected-image "
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index}`}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end mr-6 gap-x-5 mt-6">
            <button
              onClick={(e) => handleSubmit(e)}
              className="p-2 w-[80px] bg-[#7B66FF] text-white text-lg rounded-2xl"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
