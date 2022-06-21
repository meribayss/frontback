import React from "react";
import "./HomeCards.css";

const HomeCards = () => {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

<section>
  <div class="container reveal fade-right">
    <h2>Caption</h2>
    <div class="text-container">
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius
          molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius
          molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius
          molestiae perferendis eos provident vitae iste.
        </p>
      </div>
    </div>
  </div>
</section>;

export default HomeCards;
