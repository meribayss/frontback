import React from "react";
import "./Home.css";
import Video from "../Components/Video/Video";
import background from "../../src/assets/backgroundimg.png";

const Home = () => {
  return (
    <div>
      <Video />
      {/* <header class="main-header">
        <h1>
          <span>Acrylic Painting</span> Gallery
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quam!
        </p>
      </header> */}

      <main class="container">
        {/* <section class="card" data-aos="fade-right">
          <img src="https://i.ibb.co/VvC0vpN/paint-1.png" alt="" />
          <div>
            <h3>Acrylic Painting One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" class="btn">
              {" "}
              Buy Now{" "}
            </a>
          </div>
        </section> */}

        <section id="card1" class="card" data-aos="fade-left">
          <img
            src="https://elitelyfe-prod.s3.us-east-2.amazonaws.com/363174/bac24555-ff86-4282-a82e-57c48757b2fe.jpg"
            alt=""
          />
          <div>
            <h3>
              LUXURY BEVERLY HILLS RENTAL WITH QUIET ZEN GARDEN AND HILLTOP
              VIEWS
            </h3>
            <h6>Beverly Hills, USA</h6>
            <p>
              This luxury Beverly Hills rental is a stylish, contemporary
              retreat which is perfectly positioned in the hills above the city
              to capture achingly beautiful panoramic views across the canyon.
            </p>
            <a href="#" class="btn">
              {" "}
              Buy Now{" "}
            </a>
          </div>
        </section>

        <section id="card2" class="card" data-aos="fade-right">
          <img
            src="https://villa.images.holiday/Villa-Thalia-Crete-Greece-large.jpg"
            alt=""
          />
          <div>
            <h3>Villa Thalia</h3>
            <h6>Crete, Greece</h6>
            <p>
              The villa has been beautifully designed with high attention to
              detail, boasting elegant interiors and stylish furnishings. Villa
              Thalia beautifully intertwines natural materials of marble, wood
              and natural stone leaving a quality, high-end finish.
            </p>
            <a href="#" class="btn">
              {" "}
              Buy Now{" "}
            </a>
          </div>
        </section>

        <section id="card3" class="card" data-aos="fade-left">
          <img
            src="https://dykhzttck504m.cloudfront.net/thumbnails/14ce29e41862a9bc16fa522dfd9cf7cfc4bfc88f665f8360c225de722bc38be0/1200/667.jpg"
            alt=""
          />
          <div>
            <h3>Anantara Kihavah Family Beach Pool Villa</h3>
            <h6>Malé,Maldives</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              error enim laudantium, animi veniam libero eveniet culpa unde
              perferendis illo fugit corporis, voluptatibus totam dolorum,
              maiores magnam officia. Ab, delectus.
            </p>
            <a href="#" class="btn">
              {" "}
              Buy Now{" "}
            </a>
          </div>
        </section>

        <section id="card4" class="card" data-aos="fade-right">
          <img
            src="http://lvd.azurewebsites.net/wp-content/uploads/revslider/creative-freedom/Casa-La-Vida-Dulce-full-screen-image-1-1.jpg"
            alt=""
          />
          <div>
            <h3>home</h3>
            <h6>Malé,Maldives</h6>
            <p>
              Inspired by dramatic, natural tropical elements and beautiful
              landscapes this one-of-a-kind Villa offers guests dramatic views
              of the Pacific Ocean from all points on the property.homes
              ohuennyu house
            </p>
            <a href="#" class="btn">
              {" "}
              Buy Now{" "}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
