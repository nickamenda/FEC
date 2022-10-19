
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
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [zoom, setZoom] = useState(false);
  const [styling, setStyling] = useState(null);

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

  function changeStyling(zoom, styling) {
    if (zoom && styling === null) {
      setStyling({ width: '850px', height: '500px', zIndex: '100', cursor: 'zoom-in'})
    } else if (!zoom && styling) {
      setStyling({transformOrigin: '50% 0%', transform: 'scale(1.5)', zIndex: '100', cursor: 'zoom-out', position: 'sticky'})
    }
    else {
      setStyling(null)
      setZoom(false)
    }
  }



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
          <div className="product old-price" style={{ color: item.sale_price ? 'red' : 'black', textDecoration: item.sale_price ? 'line-through' : "none" }} key={item.original_price}>${item.original_price}</div>
          <div className="product current-price" key={item.sale_price}>${item.sale_price}</div>
        </>
      )
    }
    return (
      <div className="product old-price" key={item.original_price}>${item.original_price}</div>
    )
  }
  return Object.keys(currentStyle).length !== 0 ? (
    <>
      <div className="product container">
        <div className="product current-photos">
          <div className="product thumbnails">

          </div>
          <div className="product arrows">
            <img className="product mainPic" style={styling} src={currentPhoto} alt={currentStyle.name} onClick={(e) => {
              e.preventDefault();
              setZoom(!zoom)
              changeStyling(!zoom, styling)
            }} key={'mainPic'}></img>
            <i className="arrow left" style={{ visibility: currentStyle.photos[0].url === currentPhoto ? 'hidden' : null, zIndex: zoom ? 101 : 10, left: zoom ? '-80px' : '-20px'}} onClick={(e) => {
              e.preventDefault();
              for (let i = 0; i < currentStyle.photos.length; i++) {
                if (currentStyle.photos[i].url === currentPhoto) {
                  handleCurrentPhoto(currentStyle.photos[i - 1])
                }

              }
            }} key="arrow-left">&#8592;</i>
            <i className="arrow right" style={{ 'visibility': currentStyle.photos[currentStyle.photos.length - 1].url === currentPhoto ? 'hidden' : null, zIndex: zoom ? 101 : 10, left: zoom ? '630px' : '440px' }} onClick={(e) => {
              e.preventDefault();
              for (let i = 0; i < currentStyle.photos.length; i++) {
                if (currentStyle.photos[i].url === currentPhoto) {
                  handleCurrentPhoto(currentStyle.photos[i + 1])
                }
              }
            }} key="arrow-right">&#8594;</i>
                        {currentStyle.photos.map((item, i) => {
              return i < 7 ? (

                <img className="product itemThumbnail" style={currentPhoto === item.url ? {borderBottom: '4px solid red' } : null} src={item.thumbnail_url} alt={currentStyle.style_id} key={i + 3000} onClick={(e) => {
                  e.preventDefault();
                  handleCurrentPhoto(item)
                }}></img>
              ) : null
            })}

          </div>
        </div>
        <div className="product current-info">
          <div className="product-reviews">
            <StarReview currentId={product.id} key={product.id} />
          </div>
          <div className="product current-category" key={currentProduct.category}>{currentProduct.category}</div>
          <div className="product current-name" key={currentProduct.name}>{currentProduct.name}</div>
          <div className="product prices">{handleSales(currentStyle)}</div>
          <div className="product current-style"><div className="product current-style title">Style ></div><div className="product current-style name"> {currentStyle.name}</div></div>
          <RenderStyles styles={styles} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} currentStyle={currentStyle} />
          <CartInfo currentStyle={currentStyle} />
          <div className="share-buttons">
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2F127.0.0.1%3A8080%2Fclient%2Fdist%2F&layout=button_count&size=small&width=77&height=20&appId" width="77" height="20" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;" key={'iframe1'}></iframe>
            <iframe allowtransparency="true" frameBorder="0" scrolling="no"
              src="https://platform.twitter.com/widgets/tweet_button.html?size=medium"
              style={{ width: '77px', height: '20px' }} key={'iframe2'}></iframe>
            <a href="http://pinterest.com/pin/create/button/?url={http%3A%2F%2F127.0.0.1%3A8080%2Fclient%2Fdist%2F%0A}" className="pin-it-button" count-layout="horizontal" key={'pinterest'}>
              <img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" key={'pinterest2'}/>
            </a>
          </div>

        </div>
      </div>
      <div className="product bottom-info">
        <div className="product bottom-left">
          <div className="product current-slogan" key={currentProduct.slogan}>{currentProduct.slogan}</div>
          <div className="product current-description" key={currentProduct.description}>{currentProduct.description}</div>
        </div>
        <div className="product features">{
          currentProduct.features.map((item, i) => {
            return (
              <>
                <div className="product featureItem" key={i + 1943000}>{item.feature}: {item.value}</div>
              </>
            )
          })
        }</div>
      </div>
    </>
  ) : null
}
export default Product;


