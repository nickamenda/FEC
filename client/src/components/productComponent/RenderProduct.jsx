import React, { useState } from 'react';
import StarReview from "./StarReview.jsx"



const RenderProductList = (props) => {
  const { item } = props
  console.log(item)
  return (
    <>
      <StarReview item={item} key={item.id} />
      <div>{item.name}</div>
      <div>{item.category}</div>
      <div>{item.description}</div>
      <div>${item.default_price}</div>
    </>
  )
}


export default RenderProductList;
