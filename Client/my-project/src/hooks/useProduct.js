import React, { useState } from "react";
import useFetch from "./useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProduct = (initialValues) => {
  const navigate = useNavigate();
  const { data, error } = useFetch("/get-category");
  console.log(data);
  const [values, setValues] = useState(initialValues);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const selectedCategoryData = data.find(
    (item) => item.category === values.category
  );
  console.log(selectedCategoryData);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const selected = Array.from(files).slice(0, 3);
    setSelectedFiles((prevFiles) => [...prevFiles, ...selected]);
  };

  console.log(values);
  // console.log(selectedFiles)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("ProductName", values.ProductName);
    formData.append("category", values.category);
    formData.append("price", values.price);
    formData.append("subCategory", values.subCategory);
    formData.append("total", values.total);
    formData.append("description", values.description);
    formData.append("Subsubcategory", values.Subsubcategory);

    selectedFiles.forEach((file, index) => {
      console.log(`File ${index}:`, file);
      formData.append(`file`, file);
    });
    console.log(formData);
    if (
      isNaN(values.price) ||
      isNaN(values.total) ||
      values.price <= 0 ||
      values.total <= 0
    ) {
      setError("value must be numeric and greater than zero.");
      return;
    }
    try {
      const response = await axios.post(
        "https://product-managment-server.vercel.app/product",
        formData
      );
      console.log(response.data);
      resetForm();
      if (response.data.status == "ok") {
        navigate("/");
      }
    } catch (err) {
      setError(err?.data?.message, "An error occurred.");
    }
  };
  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    data,
    handleChange,
    handleFileChange,
    values,
    selectedFiles,
    selectedCategoryData,
    handleSubmit,
  };
};

export default useProduct;
