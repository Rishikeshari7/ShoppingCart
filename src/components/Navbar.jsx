import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="nav-cont">
      <NavLink to="/">
        <h1 className="Shoshy"><span className="s">S</span>hosh<span className="s">y</span></h1>
      </NavLink>
      <div className="nav-cont-2">
        <NavLink to="/">
          <p className="home">Home</p>
        </NavLink>
        <NavLink to="/about">
          <FaCartShopping className="cart" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
