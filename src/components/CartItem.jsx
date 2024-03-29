import React from 'react'
import "./CartItem.css"
import { MdDelete } from "react-icons/md";
const CartItem = ({item}) => {
  return (
    <div className='cart-item-cont'>
      <div><img className='crt-itm-img' src={item.image}></img></div>
      <div className='crt-it-inr'>
        <h4>{item.title}</h4>
        <p>{item.description.substring(0,100)+"..."}</p>
        <div className='del-price-cont'>
        <h4 className='pr-it-price'><b className='dolr'>$</b><span className='line'>{item.price}</span></h4>
        <div className='dlt-cont'><MdDelete className='dlt' /></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
