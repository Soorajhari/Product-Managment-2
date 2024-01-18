import { useState } from "react";
import AddProduct from "./component/style/AddProduct";
import { Home } from "./pages/Home";
import Addcategory from "./component/style/Addcategory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-category" element={<Addcategory />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
