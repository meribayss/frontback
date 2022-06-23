import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

import spaceVideo from "../../assets/housevideo.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>HOUSES</h1>
        <p>First ever website for villa purchase</p>
        <div>
          <Link to="/training" className="btn">
            About
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
