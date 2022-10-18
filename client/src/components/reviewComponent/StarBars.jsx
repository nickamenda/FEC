import React, {useState, useEffect} from 'react';

const StarBars = (props) => {

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
    margin: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${(props.rating.value / props.maxItem) * 100}%`,
    backgroundColor: 'grey',
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{props.rating.number}</span>
      </div>
    </div>
  )
}

export default StarBars;