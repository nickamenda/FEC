import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { format, parseISO } from 'date-fns';
import Helpful from './Helpful.jsx'

const ReviewsTile = (props) => {
  const { showModal } = props;
  const [reviewsOpen, setReviewOpen] = useState(2)


  // 66647
  return (
    <>
      <div className="reviews-scroll">
      {props.product.filter((data, index) => index < reviewsOpen).map((data, i) => {
        return (<div key={i} className="tile">
          <div className="tile-header">
            <div>
              <span>star rating: {data.rating} ★★★★★</span>
            </div>
            <div>
              <small>{data.reviewer_name}, {format(parseISO(data.date), 'MMM d\, YYY')}</small>
            </div>
          </div>


          <h4 className="tile-summary">{data.summary}</h4>

          <p className="tile-body">{data.body}</p>
          {data.recommend ? <p>✓ I recommend this product</p> : null}
          {data.response ? <div className="response">
            <><b>Response: </b>  <p>{data.response}</p> </>
          </div> : null}

          <Helpful data={data.helpfulness} style={{cursor: 'pointer'}}/>

          <hr></hr>
          </div>
      )})}

      </div>
      {reviewsOpen <= props.product.length ? <button className="reviews-button" onClick={(e) => {e.preventDefault(); setReviewOpen(reviewsOpen + 2)}}>MORE REVIEWS</button> : null}
      <button className="reviews-button" onClick={(e) => {e.preventDefault(); showModal()}}>ADD A REVIEW + </button>
    </>
  )
}

export default ReviewsTile;