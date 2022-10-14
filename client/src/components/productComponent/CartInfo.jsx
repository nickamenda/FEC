import React, { useState, useEffect } from 'react';

const CartInfo = (props) => {
  const { currentStyle } = props;
  const currentSkus = currentStyle.skus;
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [selectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1)

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
        setSelectedSize(e.target.value)
      }}>
        <option key={'option'} value={0}>Select Size</option>
        {sizes.map((item, i) => {
          return (
            <option key={i} value={item}>{item}</option>
          )
        })}
      </select>
      <select disabled={selectedSize === null}name="quantity" className="product quantity" onChange={(e) => {
          e.preventDefault()
          setSelectedQuantity(e.target.value)
        }}>
          <option key={0} value={0}>Choose Quantity:</option>
          {Array(quantity).fill(1).map((x, i) => {
            return i < 15 ? (
              <option key={i} value={i + 1}>{i + 1}</option>
            ) : null
          })}
        </select>
        <button disabled={!selectedSize} onClick={(e) => {
          e.preventDefault()
        }}>Add To Cart</button>
    </>
  )
}

export default CartInfo;