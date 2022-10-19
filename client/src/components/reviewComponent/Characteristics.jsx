import React, {useState, useEffect} from 'react';

const Characteristics = (props) => {


  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }


  // const fillerStyles = {
  //   height: '100%',
  //   width: `${}%`,
  //   backgroundColor: bgcolor,
  //   borderRadius: 'inherit',
  //   textAlign: 'right'
  // }

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold'
  // }

  return props.Fit ? (
    <div>
      <div style={containerStyles}>
        {/* <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div> */}
      </div>
      {/* <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div> */}
      {/* <p>{props.Fit.value}</p>
      <p>{props.Length.value}</p>
      <p>{props.Comfort.value}</p>
      <p>{props.Quality.value}</p> */}
    </div>
  ) : null
}

export default Characteristics;