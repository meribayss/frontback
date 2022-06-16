import React from "react";
import HeroImage from "../Components/HeroImage/HeroImage";
import TrainingSection from "../Components/Training/Training";

const Training = () => {
  return (
    <div>
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingSection />
    </div>
  );
};

export default Training;
