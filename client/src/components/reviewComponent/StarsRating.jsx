import React, { useState, useEffect } from 'react';
import axios from 'axios'


const StarsRating = (props) => {
  const [averageRating, setAverageRating] = useState(0);
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
      })
  }, [])

  useEffect(() => {
    console.log(Object.keys(metaData))
  }, [metaData])

  useEffect(() => {
    setRatings(metaData.ratings)

  }, [metaData])
  useEffect(() => {
    console.log(ratings)

  }, [ratings])
  // ratings.characteristics
  // ratings.ratings
  // ratings.recommended

  var totalNumReviews = 0;
  var totalRatingPoints = 0;



  return (
    <>
      <p>Star Average</p>

      <p>{averageRating / props.product.length}</p>
    </>
  )
}

export default StarsRating;