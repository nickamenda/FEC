import React, { useState, useEffect } from 'react';
import axios from 'axios'


const StarsRating = (props) => {
  const [metaData, setMetaData] = useState({})
  const [ratings, setRatings] = useState({})

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${props.productId}`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((response) => {
        setMetaData(response.data)
        setRatings(response.data.ratings)
      })
  }, [])


  // ratings.characteristics
  // ratings.ratings
  // ratings.recommended


  // Creating the Average Rating points
  var totalNumReviews = 0; // total number of reviews
  var totalRatingPoints = 0;

  if (Object.keys(ratings).length !== 0) {
    for (let key in ratings) {
      totalNumReviews += parseInt(ratings[key])
      totalRatingPoints += parseInt((key * ratings[key]))
    }
  }


  return (
    <>
      <p>Star Average</p>
      <p>{(totalRatingPoints / totalNumReviews).toFixed(1)}</p>
    </>
  )
}

export default StarsRating;