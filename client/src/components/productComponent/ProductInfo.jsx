import React, { useState } from 'react';
import RenderProduct from "./RenderProduct.jsx"

const ProductInfo = (props) => {
  const { products } = props
  return (
    <ul>
      {products.map(item => {
        return (
          <RenderProduct item={item} key={item.id} />
        )
      })}
    </ul>
  )
}

export default ProductInfo;