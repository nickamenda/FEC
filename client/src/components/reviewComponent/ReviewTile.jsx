import React from 'react';
import axios from 'axios';
import exampleData from './exampleData/exampleData.js';
// import './style.css';


const ReviewsList = () => {
  return (
   <ul className="reviews">
    {exampleData.results.map((data, i) => {
      return <li key={i}>
        <span  className="reviews">star rating: {data.rating}</span>
        <p>reviewer name: {data.reviewer_name}</p>
        </li>
    })}
   </ul>
  )
}

export default ReviewsList;