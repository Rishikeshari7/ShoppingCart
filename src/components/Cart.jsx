import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("main cart me hu av", cart);
  return (
    <div className="cart-main-cont">
      <div className="cart-left-cont">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="cart-right-cont">
        <div className="crt-rt-upr">
          <h3 className="yr-crt">Your Cart</h3>
          <h1 className="smry">SUMMARY</h1>
          <p className="ttl-itm">Total Items: <strong>{cart.length}</strong></p>
        </div>
        <div className="crt-rt-botm">
          <p className="ttl-itm">Total Price:<strong>$100(to chnge)</strong></p>  {/* to change the price logic */}
          <button className="chk-out">Checkout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
