import React, { useState } from 'react';
import StarReview from "./StarReview.jsx"



const RenderProduct = (props) => {
  const { currentProduct } = props
  console.log()
  return (
    <>
      <StarReview currentProduct={currentProduct} key={currentProduct.id} />
      <div>{currentProduct.name}</div>
      <div>{currentProduct.category}</div>
      <div>{currentProduct.description}</div>
      <div>${currentProduct.default_price}</div>
      </>
  )
}


export default RenderProduct;
