import React, { useState } from "react";
import instance from "../utils/axios";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const useCategory = () => {
  const navigate = useNavigate();
  const { data, error } = useFetch("/get-category");
  console.log(data);
  const category = data.map((item) => item.category);
  console.log("Category:", category);
  const [categoryValue, setCategoryValue] = useState("");
  const [subcategoryValue, setSubcategorytValue] = useState("");
  const [SubsubcategoryValue, setSubsubcategorytValue] = useState("");
  const [suggestedCategories, setSuggestedCategories] = useState([]);
  const [suggestedSubcategories, setSuggestedSubcategories] = useState([]);
  const [suggestedSubsubcategories, setSuggestedSubsubcategories] = useState(
    []
  );

  const handleInputChange = (e) => {
    const prefix = e.target.value.toLowerCase();
    const matchingCategories = data.filter((category) =>
      category.category.toLowerCase().startsWith(prefix)
    );
    console.log(matchingCategories);
    setSuggestedCategories(matchingCategories.map((item) => item.category));
    setCategoryValue(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    const prefix = e.target.value.toLowerCase();
    const matchingCategories = data.filter((category) =>
      category.subcategories.some((item) =>
        item.name.toLowerCase().startsWith(prefix)
      )
    );

    console.log(matchingCategories);

    const subcategorySuggestions = matchingCategories.flatMap((item) =>
      item.subcategories.map((subCategory) => subCategory.name)
    );

    setSuggestedSubcategories(subcategorySuggestions);
    setSubcategorytValue(e.target.value);
  };

  const handleSubsubcategoryChange = (e) => {
    const prefix = e.target.value.toLowerCase();
    const matchingCategories = data.filter((category) =>
      category.subcategories.some((subcategory) =>
        subcategory.subsubcategories.some((subsubCategory) =>
          subsubCategory.name.toLowerCase().startsWith(prefix)
        )
      )
    );

    console.log(matchingCategories);

    const subsubcategoriesSuggestions = matchingCategories.flatMap((category) =>
      category.subcategories.flatMap((subcategory) =>
        subcategory.subsubcategories.map(
          (subsubCategory) => subsubCategory.name
        )
      )
    );

    setSuggestedSubsubcategories(subsubcategoriesSuggestions);
    setSubsubcategorytValue(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setCategoryValue(category);
    setSuggestedCategories([]);
  };

  const handleSubCategoryClick = (category) => {
    setSubcategorytValue(category);
    setSuggestedSubcategories([]);
  };

  const handleSubsubCategoryClick = (category) => {
    setSubsubcategorytValue(category);
    setSuggestedSubsubcategories([]);
  };

  const body = {
    categoryValue,
    subcategoryValue,
    SubsubcategoryValue,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/add-category", body);
      console.log(response);
      if (response.data.status == "ok") {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    handleInputChange,
    handleSubcategoryChange,
    handleSubsubcategoryChange,
    handleSubmit,
    suggestedCategories,
    handleCategoryClick,
    categoryValue,
    handleSubCategoryClick,
    subcategoryValue,
    suggestedSubcategories,
    handleCategoryClick,
    suggestedSubsubcategories,
    handleSubsubCategoryClick,
    SubsubcategoryValue,
  };
};

export default useCategory;
