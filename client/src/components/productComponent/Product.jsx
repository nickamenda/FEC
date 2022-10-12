import React, { useState } from 'react';
import RenderProduct from './RenderProduct.jsx'

const Product = () => {
  const [products, setProducts] = useState([
      {
          "id": 66642,
          "campus": "hr-rfc",
          "name": "Camo Onesie",
          "slogan": "Blend in to your crowd",
          "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
          "category": "Jackets",
          "default_price": "140.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
      }
  ])
  const [currentProduct, setCurrentProduct] = useState(products[0])

  return (
    <>
      <div className="product-container"></div>
      <RenderProduct currentProduct={currentProduct}/>
    </>

  )
}
export default Product;