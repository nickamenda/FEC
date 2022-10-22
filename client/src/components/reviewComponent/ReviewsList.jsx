import React from 'react';
import axios from 'axios';
import Sorting from './Sorting.jsx'
import ReviewTile from './ReviewTile.jsx'

const ReviewsList = (props) => {
  return (
    <div className="reviews-list">
      <Sorting product={props.product}/>
      <ReviewTile product={props.product} showModal={() => props.showModal()}/>
    </div>
  )
}

export default ReviewsList;