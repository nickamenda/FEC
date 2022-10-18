import React, {useState, useEffect} from 'react';

const StarBars = (props) => {

  let maxItem = 0;



  if (props.ratings) {
    for (let i = 1; i < 6; i++) {
      if (!props.ratings[i]) {
        props.ratings[i] = '0'
      }
    }
    console.log('props.ratings:', props.ratings)
    let maxNum = Number(props.ratings[1]);
    for (let key in props.ratings) {
      if (maxNum < Number(props.ratings[key])) {
        maxNum = Number(props.ratings[key])
      }
    }
    maxItem = maxNum;
  }

  // setTimeout(() => {
  //   console.log(props.ratings)
  // }, 2000)
  return (
    <>
    <div>
      <div>
        <span></span>
      </div>
    </div>
      {/* <span>{props.ratings[1]}</span>
      <span>{props.ratings[2]}</span>
      <span>{props.ratings[3]}</span>
      <span>{props.ratings[4]}</span>
      <span>{props.ratings[5]}</span> */}
    </>
  )
}

export default StarBars;