import React from "react";
import HeroImage from "../Components/HeroImage/HeroImage";
import Form from "../Components/Form/Form";

const Contact = () => {
  return (
    <div>
      <HeroImage
        heading="CONTACT US"
        text="Please fill out the form so that we can contact you directly!"
      />
      <Form />
    </div>
  );
};

export default Contact;
