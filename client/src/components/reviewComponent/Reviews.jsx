import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReviewsList from './ReviewsList.jsx'

const Reviews = () => {

const getData = () => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products`, {
      headers: {
        'Authorization': process.env.API_KEY
      }
    })
    .then(data => {
      console.log(data)
    })
}

useEffect(() => {

}, [])

  return (
    <div className="reviews">
      <ReviewsList />

    </div>
  )
}
export default Reviews;