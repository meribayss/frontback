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
      <div className="icons">
        <ul className="iconsss">
          <Link to="/cart">
            <FaCartPlus
              size={27}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <Link to="/favorite">
            <FaRegHeart
              size={27}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <li>
            <Link
              to="/login"
              size={27}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              size={27}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            >
              Register
            </Link>
          </li>
          {/* <Link to="/login">
          <FaSignInAlt
            size={27}
            style={{ color: "#ffffff", marginRight: "2rem" }}
          />
        </Link>
        <Link to="/register">
          <FaSignInAlt
            size={27}
            style={{ color: "#ffffff", marginRight: "2rem" }}
          />
        </Link> */}
        </ul>
      </div>
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
