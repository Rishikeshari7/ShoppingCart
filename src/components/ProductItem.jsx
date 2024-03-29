import React from 'react'
import "./ProductItem.css"

const ProductItem = ({item}) => {
    console.log(item.id,"item->",item)
  return (
    <div className='ProductItem-cont'>
      <h2>{item.title.substring(0,15)+"..."}</h2>
      <p>{item.description.substring(0,65)+"..."}</p>
      <img className='pr-it-img' src={item.image}></img>
      
      <div className='pr-it-cont-2'>
        <h4 className='pr-it-price'><b className='dolr'>$</b>{item.price}</h4>
        <button className='pr-it-btn'>Add to cart</button> {/* to be modified for add or remove and toast to be added */}
      </div>
    </div>
  )
}

export default ProductItem
