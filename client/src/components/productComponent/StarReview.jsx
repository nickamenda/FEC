import React, { useState } from 'react';
import axios from "axios";

const StarReview = (props) => {
  const { item } = props
  const [reviews, setReviews] = useState([])
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${item.id}`, {headers: {
      'Authorization':
    }})
    .then((res) => {
      console.log(res.data.ratings)
    })
  return (
    <div>Test</div>
  )
}


export default StarReview;

// axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${item.id}`)
