import React from "react";
import Footer from "../Components/Footer/Footer";
import HeroImage from "../Components/HeroImage/HeroImage";
import Navbar from "../Components/Navbar/Navbar";
import TrainingSection from "../Components/Training/Training";

const Training = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Training;
