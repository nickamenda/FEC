import React from 'react';
import axios from 'axios';
import StarsRating from './StarsRating.jsx'

const RatingBreakdown = (props) => {
  return (
    <div className="reviews">
      <h1>Rating BreakDown</h1>
      <StarsRating product={props.product}/>
    </div>
  )
}

export default RatingBreakdown;