import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarReview from './StarReview.jsx'
import RenderStyles from './Styles.jsx'
import CartInfo from './CartInfo.jsx'
import productExample from './exampleData/product.js'
import stylesExample from './exampleData/styles.js'

const Product = ({ product }) => {


  const [currentProduct, setCurrentProduct] = useState(product);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({})
  const [currentPhoto, setCurrentPhoto] = useState('')
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product.id}/styles`, {
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
          <div className="product old-price" style={{ color: item.sale_price ? 'red' : 'black', textDecoration: item.sale_price ? 'line-through' : "none" }}>${item.original_price}</div>
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
          <div className="product thumbnails">
            {currentStyle.photos.map((item, i) => {
              return (
                <img className="product itemThumbnail" style={currentPhoto === item.url ? { border: '2px solid red' } : { border: '2px solid black' }} src={item.thumbnail_url} alt={currentStyle.style_id} key={i + 1000000} onClick={(e) => {
                  e.preventDefault();
                  handleCurrentPhoto(item)
                }}></img>
              )
            })}
          </div>
          <img className="product mainPic" style={{ width: zoom ? '750px' : null, height: zoom ? '750px' : null }} src={currentPhoto} alt={currentStyle.name} onClick={(e) => {
            e.preventDefault();
            setZoom(!zoom)
          }}></img>
        </div>
        <div className="product current-info">
          <div className="product reviews">
            <StarReview currentId={product.id} key={product.id} />
          </div>
          <div className="product current-category">{currentProduct.category}</div>
          <div className="product current-name">{currentProduct.name}</div>
          <div className="product prices">{handleSales(currentStyle)}</div>
          <div className="product current-style"><div className="product current-style title">Style ></div><div className="product current-style name"> {currentStyle.name}</div></div>
          <RenderStyles styles={styles} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} currentStyle={currentStyle} />
          <CartInfo currentStyle={currentStyle} />
        </div>
      </div>
      <div className="product bottom-info">
        <div className="product bottom-left">
          <div className="product current-slogan">{currentProduct.slogan}</div>
          <div className="product current-description">{currentProduct.description}</div>
        </div>
        <div className="product features">{
          currentProduct.features.map((item) => {
            return (
              <>
                <div className="product featureItem">{item.feature}: {item.value}</div>
              </>
            )
          })
        }</div>
      </div>
    </>
  ) : null
}
export default Product;