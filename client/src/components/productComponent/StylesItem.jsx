import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const StylesItem = (props) => {
  const { style, handleStyles, handleCurrentPhoto, currentStyle } = props
  return (
    <>
    <img className="styles-thumbnails" style={currentStyle === style ? { border: '2px solid red' } : { border: '2px solid black' }} src={`${style.photos[0].thumbnail_url}`} alt={`${style.name}`} onClick={(e) => {
      e.preventDefault()
      handleStyles(style)
      handleCurrentPhoto(style.photos[0])
    }}></img>
    <div className="checkmark" style={{visibility: currentStyle === style ? null : 'hidden'}}>✓</div>
    </>
  )
}

export default StylesItem;