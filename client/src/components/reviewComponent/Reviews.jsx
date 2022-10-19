import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'
import RatingBreakdown from './RatingBreakdown.jsx'
import './style.css'

const Reviews = (props) => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${props.product.id}`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
    .then((response) => {
      setProduct(response.data.results)
    })
  }, [])


  return product.length !== 0 ? (
    <div>
      <div className="reviews-parent">
        <h1 className="reviews-header">Ratings and Reviews</h1>

      </div>
      <div className="row">
        <RatingBreakdown className="reviews-content" product={product} productId={props.product.id}/>
        <ReviewsList className="reviews-content" product={product}/>
      </div>
    </div>
  ) : null
}
export default Reviews;