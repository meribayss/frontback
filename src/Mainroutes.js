import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Pricing from "../src/pages/Pricing";
import Training from "../src/pages/Training";
import Contact from "../src/pages/Contact";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
