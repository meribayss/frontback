import React from "react";
import "./Training.css";

import { Link } from "react-router-dom";

// import Pod from "../../assets/pod.jpg";
// import Moon from "../../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>About US</h1>
        <p>
          We were founded in 2022, our goal is to help you get your dream home.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Training;
