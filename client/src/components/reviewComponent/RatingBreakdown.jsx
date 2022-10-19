import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import StarsRating from './StarsRating.jsx'

const RatingBreakdown = (props) => {

  useEffect(() => {
    console.log(props.productId)
  })

  return (
    <div className="reviews">
      <StarsRating product={props.product} productId={props.productId}/>
    </div>
  )
}

export default RatingBreakdown;