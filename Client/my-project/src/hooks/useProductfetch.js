import React, { useEffect, useState } from "react";
import instance from "../utils/axios";
import { useNavigate } from "react-router-dom";

const useProductfetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
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

  const handleValueSubmit = async (e, checkedValue) => {
    e.preventDefault();

    const updateCategoriesPromises = Object.entries(checkedValue).map(
      async ([name, isChecked]) => {
        let updatedCategories;
        if (isChecked) {
          updatedCategories = [...selectedSubcategories, name];
        } else {
          updatedCategories = selectedSubcategories.filter(
            (category) => category !== name
          );
        }
        setSelectedSubcategories(updatedCategories);

        const body = {
          updatedCategories,
        };

        const response = await instance.post("/filterdata", body);
        console.log(response.data);
        setData(response.data.filterData);
      }
    );
    await Promise.all(updateCategoriesPromises);
    navigate("/");
  };

  console.log(data.filterData);


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
    handleValueSubmit,
  };
};

export default useProductfetch;
