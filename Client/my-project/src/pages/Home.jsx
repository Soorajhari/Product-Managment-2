import React from "react";
import Nav from "../component/style/Nav";
import Category from "../component/style/Category";
import Productlist from "../component/style/Productlist";
import useProductfetch from "../hooks/useProductfetch";

export const Home = () => {
  const { handleCheckboxChange, data, handleSearch, handleSearchSubmit } =
    useProductfetch();
  return (
    <div className={`relative`}>
      <Nav
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      <div className="flex">
        <div className="hidden md:block">
          <Category handleCheckboxChange={handleCheckboxChange} />
        </div>

        <div className="ml-0 md:ml-40">
          <Productlist data={data} />
        </div>
      </div>
    </div>
  );
};
