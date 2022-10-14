import React from 'react';
import axios from 'axios';
import Sorting from './Sorting.jsx'
import ReviewTile from './ReviewTile.jsx'

const ReviewsList = (props) => {
  return (
    <div className="reviews">
      <h1>Review List</h1>
      <Sorting product={props.product}/>
      <ReviewTile product={props.product}/>
    </div>
  )
}

export default ReviewsList;