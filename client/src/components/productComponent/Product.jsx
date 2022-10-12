import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx'

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
      },
      {
          "id": 66643,
          "campus": "hr-rfc",
          "name": "Bright Future Sunglasses",
          "slogan": "You've got to wear shades",
          "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
          "category": "Accessories",
          "default_price": "69.00",
          "created_at": "2022-03-31T21:13:15.875Z",
          "updated_at": "2022-03-31T21:13:15.875Z"
      },
  ])

  return (
    <>
      <div className="product-container"></div>
      <ProductInfo products={products}/>
    </>

  )
}
export default Product;