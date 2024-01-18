import React, { useEffect, useState } from "react";
import instance from "../utils/axios";

const useProductfetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProductData = async () => {
    try {
      const response = await instance.get("/get-product");
      setData(response.data.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleCheckboxChange = (isChecked, subCategoryName) => {
    let updatedCategories;
    if (isChecked) {
      updatedCategories = [...selectedSubcategories, subCategoryName];
    } else {
      updatedCategories = selectedSubcategories.filter(
        (category) => category !== subCategoryName
      );
    }
    setSelectedSubcategories(updatedCategories);
    filterItems(updatedCategories);
  };

  const filterItems = async (categories) => {
    console.log(categories);
    const body = {
      categories,
    };
    try {
      const response = await instance.post("/filter", body);
      console.log(response.data);
      setData(response.data.filterData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSearch = (values) => {
    setSearch(values);
  };
  const body = {
    search,
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/search", body);
      setData(response.data.Product);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    data,
    error,
    handleCheckboxChange,
    handleSearch,
    handleSearchSubmit,
  };
};

export default useProductfetch;
