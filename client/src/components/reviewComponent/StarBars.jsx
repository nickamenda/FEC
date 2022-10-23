import React, {useState, useEffect} from 'react';

const StarBars = (props) => {

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    margin: '5px',
    marginRight: 0
  }

  const fillerStyles = {
    height: '100%',
    width: `${(props.rating.value / props.maxItem) * 100}%`,
    backgroundColor: 'grey',
  }

  const labelStyles = {
    color: 'black',
    fontWeight: 'bold'
  }

  const bars = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div style={bars}>
      <p className="stars-p">{props.rating.number} stars</p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </div>
  )
}

export default StarBars;