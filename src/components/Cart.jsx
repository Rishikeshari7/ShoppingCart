import React, { useEffect } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  let sum=0;
  cart.forEach((item)=>{
     sum+=item.price
  })
  useEffect(()=>{
    console.log("total price cart ka",sum);
  },[cart]);
  console.log("main cart me hu av", cart);
  return (
    <>
    {
      cart.length>0?
      <div className="cart-main-cont">
      <div className="cart-left-cont">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="cart-right-cont">
        <div className="crt-rt-upr">
          <h3 className="yr-crt">Your Cart</h3>
          <h1 className="smry">SUMMARY</h1>
          <p className="ttl-itm">Total Items: <strong>{cart.length}</strong></p>
        </div>
        <div className="crt-rt-botm">
          <p className="ttl-itm">Total Price:<strong>${sum.toFixed(2)}</strong></p>  {/* to change the price logic */}
          <button className="chk-out">Checkout Now</button>
        </div>
      </div>
    </div>
    :
    <div className="emty-cont">
      <h1 className="emty">Cart is Empty <MdRemoveShoppingCart className="emty-crt"/></h1>
      <NavLink to="/">
        <button className="pr-it-btn shop-now">Shop Now <FaCartArrowDown /></button>
      </NavLink>
    </div>
    }
    
    </>
    
  );
};

export default Cart;
