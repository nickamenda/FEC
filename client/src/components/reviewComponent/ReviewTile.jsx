import React from 'react';
import axios from 'axios';
import exampleData from './exampleData/exampleData.js';
// import './style.css';

const ReviewsList = () => {
  return (
   <ul className="List">
    {exampleData.results.map(data => {
      return <li>
        <span>star rating: {data.rating}</span>
        <p>reviewer name: {data.reviewer_name}</p>
        </li>
    })}
   </ul>
  )
}

export default ReviewsList;