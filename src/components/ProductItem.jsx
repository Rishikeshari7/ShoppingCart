import React, { useEffect } from 'react'
import "./ProductItem.css"
import { useDispatch, useSelector } from 'react-redux'
import { addCart, removeCart } from '../router/slice'

const ProductItem = ({item}) => {
    const cart=useSelector((state)=>state.cart); 
    const dispatch =useDispatch();
   
  return (
    <div className='ProductItem-cont'>
      <h2>{item.title.substring(0,15)+"..."}</h2>
      <p>{item.description.substring(0,60)+"..."}</p>
      <img className='pr-it-img' src={item.image}></img>
      
      <div className='pr-it-cont-2'>
        <h4 className='pr-it-price'><b className='dolr'>$</b><span className='line'>{item.price}</span></h4>
         {/* to be modified for add or remove and toast to be added */}
        <>
          {
            cart.some((ele)=>(ele.id===item.id))?
            (<button onClick={()=>dispatch(removeCart(item.id))} className='pr-it-btn-r pr-it-btn'>Remove Item</button>):
            (<button onClick={()=>dispatch((addCart(item)))} className='pr-it-btn'>Add to Cart</button>)
          }
        </>
      </div>
    </div>
  )
}

export default ProductItem
