import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


const ReviewsList = (props) => {
  return (
   <ul className="reviews">
    {props.product.map((data, i) => {
      return <li key={i}>
        <span  className="reviews">star rating: {data.rating}</span>
        <p>reviewer name: {data.reviewer_name}</p>
        </li>
    })}
   </ul>
  )
}

export default ReviewsList;