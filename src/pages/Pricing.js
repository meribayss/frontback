import React from "react";
import PricingCards from "../Components/Pricing/Pricing";
import HeroImage from "../Components/HeroImage/HeroImage";

const Pricing = () => {
  return (
    <div>
      <HeroImage heading="Videos" text="See what we can offer!" />
      <PricingCards />
    </div>
  );
};

export default Pricing;
