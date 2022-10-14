import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarReview from './StarReview.jsx'
import RenderStyles from './Styles.jsx'
import CartInfo from './CartInfo.jsx'
import productExample from './exampleData/product.js'
import stylesExample from './exampleData/styles.js'

const Product = ({ currentId }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({})
  const [currentPhoto, setCurrentPhoto] = useState('')
  // const [fetching, setFetching] = useState(true)
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${currentId}`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        setCurrentProduct(res.data)
      })
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${currentId}/styles`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        setStyles(res.data.results)
        setCurrentStyle(res.data.results[0])
        handleCurrentPhoto(res.data.results[0].photos[0])
      })

    }, [])
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
          <div className="product old-price" style={{ textDecoration: item.sale_price ? 'line-through' : "none" }}>${item.original_price}</div>
          <div className="product current-price">${item.sale_price}</div>
        </>
      )
    }
    return (
      <div className="product old-price">${item.original_price}</div>
    )
  }
  return Object.keys(currentStyle).length !== 0 ? (
    <>
      <div className="product container">
        <div className="product current-photos">
          <img className="product mainPic" src={currentPhoto} alt={currentStyle.name}></img>
          <div className="product thumbnails">
            {currentStyle.photos.map((item, i) => {
              return (
                <img className="product itemThumbnail" src={item.thumbnail_url} alt={currentStyle.style_id} key={i + 1000000} onClick={(e) => {
                  e.preventDefault();
                  handleCurrentPhoto(item)
                }}></img>
              )
            })}
          </div>
        </div>
        <div className="product current-info">
          <div className="product reviews">
            <StarReview currentId={currentId} key={currentId} />
          </div>
          <div className="product current-category">{currentProduct.category}</div>
          <div className="product current-name">{currentProduct.name}</div>
          <div className="product prices">{handleSales(currentStyle)}</div>
          <div className="product current-style">Current Style > {currentStyle.name}</div>
          <RenderStyles styles={styles} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} />
          <CartInfo currentStyle={currentStyle} />
          <div className="product current-slogan">{currentProduct.slogan}</div>
          <div className="product current-description">{currentProduct.description}</div>
        </div>
      </div>
    </>
  ) : null
}
export default Product;