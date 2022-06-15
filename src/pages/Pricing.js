import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import PricingCards from "../Components/Pricing/Pricing";
import HeroImage from "../Components/HeroImage/HeroImage";

const Pricing = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCards />
      {/* <Footer /> */}
    </div>
  );
};

export default Pricing;
