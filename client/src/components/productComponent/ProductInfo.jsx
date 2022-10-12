import React, { useState } from 'react';
import RenderProductList from "./RenderProduct.jsx";

const ProductInfo = (props) => {
  const { products } = props
  return (
    <ul>
      {products.map(item => {
        return (
          <>
          <RenderProductList item={item} key={item.id} /></>

        )
      })}
    </ul>
  )
}

export default ProductInfo;