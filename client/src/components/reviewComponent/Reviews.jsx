import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'

const Reviews = () => {



useEffect(() => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66642`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
    .then(data => {
      console.log(data.data)
    })
}, [])

  return (
    <div className="reviews">
      <ReviewsList />

    </div>
  )
}
export default Reviews;