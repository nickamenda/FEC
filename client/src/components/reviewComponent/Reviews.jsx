import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'
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
    <div className="reviews">
      <ReviewsList product={product}/>
    </div>
  ) : null
}
export default Reviews;