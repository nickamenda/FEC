import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentSkus } = props;
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    for (let key in currentSkus) {
      if (currentSkus[key].size === selectedSize) {
        setQuantity(currentSkus[key].quantity)
      }
    }
  }, [selectedSize])



  return (
    <>
      <label htmlFor="size">Choose Size:</label>
      <select name="size" className="product size" onChange={(e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSelectedSize(e.target.value)
      }}>
        {sizes.map((item, i) => {
          return (
            <option key={i} value={item}>{item}</option>
          )
        })}
      </select>
      <label htmlFor="quantity">Choose Size:</label>
      <select name="quantity" className="product quantity">
        {Array(quantity + 1).fill(1).map((x, i) => {
          return i <= 15 ? (
            <option key={i} value={i}>{i}</option>
          ) : null
        })}
      </select>
    </>
  )
}

export default CartInfo;