import React from 'react';
import axios from 'axios';
import Sorting from './Sorting.jsx'
import ReviewTile from './ReviewTile.jsx'

const ReviewsList = () => {
  return (
    <div className="reviews">
      <h1>Review List</h1>
      <Sorting />
      <ReviewTile />
    </div>
  )
}

export default ReviewsList;