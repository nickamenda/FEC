import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


const ReviewsList = (props) => {
  const [reviewsOpen, setReviewOpen] = useState(2)


  return (
    <>
      <ul className="reviews">
      {props.product.filter((data, index) => index < reviewsOpen).map((data, i) => {
        return (<li key={i} className="tile">
          <span className="reviews">star rating: {data.rating}</span>


          <p>{data.reviewer_name} {data.date}</p>
          <h3>{data.summary}</h3>
          <p>{data.body}</p>
          {data.recommend ? <p>✓ I recommend this product</p> : null}
          {data.recommend ? <><b>Response: </b>  <p>{data.response}</p> </> : null}
          <small>Helpful? <u>Yes</u> ({data.helpfulness}) | <u>Report</u></small>
          <hr></hr>
          </li>
      )})}

    </ul>
    {reviewsOpen <= props.product.length ? <button onClick={(e) => {e.preventDefault(); setReviewOpen(reviewsOpen + 2)}}>More Reviews</button> : null}
    <button></button>
  </>
  )
}

export default ReviewsList;