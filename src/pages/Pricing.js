import React from "react";
import PricingCards from "../Components/Pricing/Pricing";
import HeroImage from "../Components/HeroImage/HeroImage";

const Pricing = () => {
  return (
    <div>
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCards />
    </div>
  );
};

export default Pricing;
