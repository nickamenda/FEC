import React, { useState } from 'react';
import StarReview from './StarReview.jsx'
import RenderStyles from './Styles.jsx'
import productExample from './exampleData/product.js'
import stylesExample from './exampleData/styles.js'

const Product = () => {
  const [currentProduct, setCurrentProduct] = useState(productExample);
  const [styles, setStyles] = useState(stylesExample.results);
  const [currentStyle, setCurrentStyle] = useState(styles[1])
  // styles.shift()

  function handleStyles(style) {
    setCurrentStyle(style)
  }

  return (
    <>
      <div className="product-container">
      <StarReview currentProduct={currentProduct} key={currentProduct.id} />
      <div className="current-name">{currentProduct.name}</div>
      <div className="current-price">{currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price}</div>
      <div className="current-category">{currentProduct.category}</div>
      <div className="current-slogan">{currentProduct.slogan}</div>
      <div className="current-description">{currentProduct.description}</div>
      <RenderStyles styles={styles} handleStyles={handleStyles}/>
      </div>
    </>
  )
}
export default Product;