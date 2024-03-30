import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart=useSelector((state)=>state.cart)
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
        <div className="cart-ic-cont">
          <FaCartShopping className="cart" />
          {
            cart.length>0&&
            <span className="cat-len">
            <span>{cart.length}</span>
            </span>
          }
        </div>
          
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
