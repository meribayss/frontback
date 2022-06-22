import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Pricing from "../src/pages/Pricing";
import Training from "../src/pages/Training";
import Contact from "../src/pages/Contact";
import AddProduct from "../src/Components/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import ProductList from "../src/Components/Products/ProductsList";
import Register from "./Register/Register";
import Login from "./Login/Login";
import ProductDetails from "./Components/Products/ProductDetails";
import EditProduct from "./Components/AddProduct/EditProduct/EditProduct";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
