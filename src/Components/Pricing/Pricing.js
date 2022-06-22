import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import videos1 from "../../assets/videos1.MP4";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <img
            class="card-img-top"
            src="https://media0.giphy.com/media/l3vR4Gm8ZP1PbgA7K/giphy.gif"
            alt="Card image cap"
          ></img>
          <div className="par">
            <p>- Views -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
          </div>
          <Link to="/productlist" className="btn">
            Watch
          </Link>
        </div>
        <div className="card">
          <h3>- Suite -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/productlist" className="btn">
            Watch
          </Link>
        </div>
        <div className="card">
          <h3>- Executive -</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>- 3 Days -</p>
          <p>- Views -</p>
          <p>- Featured -</p>
          <p>- Private Quarters -</p>
          <Link to="/productlist" className="btn">
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
