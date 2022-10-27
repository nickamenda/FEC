import React, {useState, useEffect} from 'react';

const StarBars = (props) => {

  const [] = useState('')

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
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',
    marginBottom: '5px'
  }

  return (
    <div style={bars}>
      <span><p className="stars-p">{props.rating.number} stars</p></span>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </div>
  )
}

export default StarBars;