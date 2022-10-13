import React from 'react';
import axios from 'axios';
import exampleData from './exampleData/exampleData.js';

const ReviewsList = () => {
  return (
   <ul>
    {exampleData.results.map(data => {
      return <li>star rating: {data.rating}</li>
    })}
   </ul>
  )
}

export default ReviewsList;