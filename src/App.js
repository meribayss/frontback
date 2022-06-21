import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Mainroutes from "./Mainroutes";
import CartContextProvider from "./Context/CartContext";
import AuthContextProvider from "./Context/AuthContext";
import MainContextProvider from "./Context/MainContext";
const App = () => {
  return (
    <div>
      <CartContextProvider>
        <MainContextProvider>
          <AuthContextProvider>
            {/* <ProductContextProvider> */}
            <Navbar />
            <Mainroutes />
            <Footer />
            {/* </ProductContextProvider> */}
          </AuthContextProvider>
        </MainContextProvider>
      </CartContextProvider>
    </div>
  );
};

export default App;
