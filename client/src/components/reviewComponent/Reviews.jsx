import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'
import RatingBreakdown from './RatingBreakdown.jsx'
import Modal from './Modal.jsx'
import './style.css'


const Reviews = (props) => {
  const [product, setProduct] = useState([])
  const [showModal, setShowModal] = useState(false);

  function modal() {
    if (showModal) {
      setShowModal(false)
    } else if (!showModal) {
      setShowModal(true)
    }
  }
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${props.product.id}&count=100`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
    .then((response) => {
      setProduct(response.data.results)
    })
  }, [])


  return product.length !== 0 ? (
    <div id="reviews">
      <div className="reviews-parent">
        <h3 className="reviews-header">Ratings and Reviews</h3>
      </div>
      <div className="row">
        <RatingBreakdown className="reviews-content" product={product} productId={props.product.id}/>
        <ReviewsList className="reviews-content" product={product} showModal={() => modal()}/>
      </div>
      {showModal ? <Modal className="modal"/> : null}
    </div>
  ) : null
}
export default Reviews;