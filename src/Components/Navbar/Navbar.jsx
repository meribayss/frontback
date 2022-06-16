import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import { FaCartPlus, FaSignInAlt, FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/addproduct">Addproduct</Link>
        </li>
        <li>
          <Link to="/productlist">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <Link to="/">
          <h1 id="dream">DreamHome</h1>
        </Link> */}
      </ul>
      <Link to="/">
        <h1 id="dream">DreamHome</h1>
      </Link>
      <ul>
        <Link to="/cart">
          <FaCartPlus
            size={27}
            style={{ color: "#ffffff", marginRight: "2rem" }}
          />
        </Link>
        <FaRegHeart
          size={27}
          style={{ color: "#ffffff", marginRight: "2rem" }}
        />
        <FaSignInAlt
          size={27}
          style={{ color: "#ffffff", marginRight: "2rem" }}
        />
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
