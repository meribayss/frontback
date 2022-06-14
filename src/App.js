import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Mainroutes from "./Mainroutes";
const App = () => {
  return (
    <div>
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
