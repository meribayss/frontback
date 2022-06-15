import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./Context/ProductContext";
import Mainroutes from "./Mainroutes";
import CartContextProvider from "./Context/CartContext";
const App = () => {
  return (
    <div>
      <CartContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Mainroutes />
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </div>
  );
};

export default App;
