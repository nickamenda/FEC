import React, { useState } from 'react';
import StarReview from './StarReview.jsx'
import RenderStyles from './Styles.jsx'
import productExample from './exampleData/product.js'
import stylesExample from './exampleData/styles.js'

const Product = () => {
  const [currentProduct, setCurrentProduct] = useState(productExample);
  const [styles, setStyles] = useState(stylesExample.results);
  const [currentStyle, setCurrentStyle] = useState(styles[0])
  const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[0].url)
  // styles.shift()

  function handleStyles(style) {
    setCurrentStyle(style)
  }

  function handleCurrentPhoto(item) {
    setCurrentPhoto(item.url)
  }

  return (
    <>
      <div className="product-container">
        <div className="current-photos">
         <img src={currentPhoto} alt={currentStyle.name}></img>
          {currentStyle.photos.map((item, i) => {
            return (
              <img src={item.thumbnail_url} alt={currentStyle.style_id} key={i} onClick={(e) => {
                e.preventDefault();
                handleCurrentPhoto(item)
              }}></img>
            )
          })}
        </div>
        <div className="product-reviews">
          <StarReview currentProduct={currentProduct} key={currentProduct.id} />
        </div>
        <div className="current-style">Current Style > {currentStyle.name}</div>
        <div className="current-name">{currentProduct.name}</div>
        <div className="current-price">{currentStyle.sale_price ? currentStyle.sale_price : currentStyle.original_price}</div>
        <div className="current-category">{currentProduct.category}</div>
        <div className="current-slogan">{currentProduct.slogan}</div>
        <div className="current-description">{currentProduct.description}</div>
        <RenderStyles styles={styles} handleStyles={handleStyles} />
      </div>
    </>
  )
}
export default Product;