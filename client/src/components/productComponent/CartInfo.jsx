import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentSkus } = props;
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];


  return (
    <>
    <label htmlFor="size">Choose Size:</label>
    <select name="size" className="product size">
     {sizes.map((item, i) => {
        return (
          <option key={i}value={item}>{item}</option>
        )
      })}
    </select>
    <label htmlFor="size">Choose quantity:</label>
    <select name="quantity" className="product quantity">
    </select>
    </>
  )
}

export default CartInfo;