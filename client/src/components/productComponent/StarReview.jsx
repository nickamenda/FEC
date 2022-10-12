import React, { useState, useEffect } from 'react';
import axios from "axios";

const StarReview = (props) => {
  // const { item } = props
  const item = { "id": 66642 }
  const [ratings, setRatings] = useState({})
  var reviewAmt = 0;
  var reviewScores = 0;
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${item.id}`, {
      headers: {
        'Authorization':
      }
    })
      .then((res) => {
        setRatings(res.data.ratings)
      })
  }, [])


  if (Object.keys(ratings).length === 5) {
    for (let key in ratings) {
      reviewAmt += Number(ratings[key])
      reviewScores += (Number(key) * (ratings[key]))
    }
  }
  return (
    <>
    <div>View all {reviewAmt} reviews...</div>
    <div>Review avg = {(reviewScores / reviewAmt).toFixed(2)}</div>
    </>
  )
}


export default StarReview;

// axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/ratings/meta?product_id=${item.id}`)
