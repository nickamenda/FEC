import React, { useState } from 'react';


const RenderProduct = (props) => {
  const { item } = props
  console.log(item)
  return (
    <>
    <div>{item.name}</div>
    <div>{item.category}</div>
    <div>{item.description}</div>
    <div>${item.default_price}</div>
    </>
  )
}


export default RenderProduct;
