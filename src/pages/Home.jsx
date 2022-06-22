import React from "react";
import "./Home.css";
import Video from "../Components/Video/Video";
import background from "../../src/assets/backgroundimg.png";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Video />
      <div className="container__home">
        <div className="container__home__left">
          <img id="background" src={background} alt="" />
        </div>
        <div className="container__home__right">
          <h1>ahifdjkdsj</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, ab aliquid officiis hic maxime cupiditate vel
            perspiciatis. Distinctio, consequuntur aliquid!
          </p>
        </div>
      </div>
      <div className="container__home2">
        <div className="container__home__left2">
          <img id="background" src={background} alt="" />
        </div>
        <div className="container__home__right2">
          <h1>ahifdjkdsj</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, ab aliquid officiis hic maxime cupiditate vel
            perspiciatis. Distinctio, consequuntur aliquid!
          </p>
        </div>
      </div>
      <div className="container__home3">
        <div className="container__home__left3">
          <img id="background" src={background} alt="" />
        </div>
        <div className="container__home__right3">
          <h1>ahifdjkdsj</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, ab aliquid officiis hic maxime cupiditate vel
            perspiciatis. Distinctio, consequuntur aliquid!
          </p>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
