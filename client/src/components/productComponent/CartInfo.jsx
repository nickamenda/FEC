import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentSkus } = props;
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [selectedSize, setSelectedSize] = useState(null)
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
      <select name="size" className="product size" onChange={(e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSelectedSize(e.target.value)
      }}>
        <option key={'option'} value={0}>Select Size</option>
        {sizes.map((item, i) => {
          return (
            <option key={i} value={item}>{item}</option>
          )
        })}
      </select>
      <label htmlFor="quantity">Choose Quantity:</label>
      {selectedSize === null ? (<select disabled name="quantity" className="product quantity"></select>) : (
        <select name="quantity" className="product quantity">
          {Array(quantity).fill(1).map((x, i) => {
            return i <= 15 ? (
              <option key={i} value={i + 1}>{i + 1}</option>
            ) : null
          })}
        </select>
      )
      }
    </>
  )
}

export default CartInfo;