import React, { useState } from 'react';
import StarReview from './StarReview.jsx'
import RenderStyles from './Styles.jsx'
import CartInfo from './CartInfo.jsx'
import productExample from './exampleData/product.js'
import stylesExample from './exampleData/styles.js'

const Product = () => {
  const [currentProduct, setCurrentProduct] = useState(productExample);
  const [styles, setStyles] = useState(stylesExample.results);
  const [currentStyle, setCurrentStyle] = useState(styles[0])
  const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[0].url)
  console.log(currentPhoto)
  console.log(currentStyle)
  // styles.shift()

  function handleStyles(style) {
    setCurrentStyle(style)
  }

  function handleCurrentPhoto(item) {
    setCurrentPhoto(item.url)
  }
  function handleSales(item) {
    if (item.sale_price) {
      return (
        <>
          <div className="product old-price" style={{ textDecoration: item.sale_price ? 'line-through' : "none"}}>${item.original_price}</div>
          <div className="product current-price">${item.sale_price}</div>
          </>
      )
    }
    return (
      <div className="product old-price">${item.original_price}</div>
    )
  }
  return (
    <>
      <div className="product-container">
        <div className="current-photos">
          <img className="product-mainPic" src={currentPhoto} alt={currentStyle.name}></img>
          <div className="product-thumbnails">
            {currentStyle.photos.map((item, i) => {
              return (
                <img className="product-itemThumbnail" src={item.thumbnail_url} alt={currentStyle.style_id} key={i + 1000000} onClick={(e) => {
                  e.preventDefault();
                  handleCurrentPhoto(item)
                }}></img>
              )
            })}
          </div>
        </div>
        <div className="product-reviews">
          <StarReview currentProduct={currentProduct} key={currentProduct.id} />
        </div>
        <div className="product current-info">
          <div className="product current-category">{currentProduct.category}</div>
          <div className="product current-name">{currentProduct.name}</div>
            <div className="product prices">{handleSales(currentStyle)}</div>
          <div className="product current-style">Current Style > {currentStyle.name}</div>
          <RenderStyles styles={styles} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto}/>
          <CartInfo currentSkus={currentStyle.skus} />
          <div className="product current-slogan">{currentProduct.slogan}</div>
          <div className="product current-description">{currentProduct.description}</div>
        </div>
      </div>
    </>
  )
}
export default Product;