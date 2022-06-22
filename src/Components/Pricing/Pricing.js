import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import videos1 from "../../assets/videos1.MP4";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div>
          <div className="card">
            <img
              class="card-img-top"
              src="https://media3.giphy.com/media/KzniGaxynIdqWU8N3U/giphy.gif"
              alt="Card image cap"
            ></img>
            <span className="bar"></span>
            <div className="par">
              <p>⌂ 320 sqm ⌂</p>
              <p>- Featured -</p>
              <p>- Private Quarters -</p>
              <btn
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=1kMfMkonYWE&t=28s",
                    "_blank"
                  )
                }
                className="btn"
              >
                Watch
              </btn>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              class="card-img-top"
              src="https://media3.giphy.com/media/eH3yXkrghNkqctzcr4/giphy.gif"
              alt="Card image cap"
            ></img>
            <span className="bar"></span>
            <div className="par">
              <p>⌂ 412 sqm ⌂</p>
              <p>- Featured -</p>
              <p>- Private Quarters -</p>
              <btn
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=1kMfMkonYWE&t=28s",
                    "_blank"
                  )
                }
                className="btn"
              >
                Watch
              </btn>
            </div>
          </div>
        </div>
        <div className="card">
          <img
            class="card-img-top"
            src="https://i.gifer.com/740U.gif"
            alt="Card image cap"
          ></img>
          <span className="bar"></span>
          <div className="par">
            <p>⌂ 580 sqm ⌂</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <btn
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=uAA5_vqAQ80",
                  "_blank"
                )
              }
              className="btn"
            >
              Watch
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
