import React, {useState, useEffect } from 'react';


const StarsRating = (props) => {
  const [averageRating, setAverageRating] = useState(0);
  // useEffect(() => {
  //   for (let i = 0; i < props.product.length; i++) {
  //     setAverageRating((averageRating + props.product[i].rating))
  //   }
  // })


  if (props.product === 5) {

  }
  return (
    <>
      <p>Star Average</p>

      <p>{averageRating / props.product.length}</p>
    </>
  )
}

export default StarsRating;