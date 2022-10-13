import React, { useState } from 'react';

const StylesItem = (props) => {
  const { style, handleStyles, handleCurrentPhoto } = props
  return (
    <img className="styles-thumbnails" src={`${style.photos[0].thumbnail_url}`} alt={`${style.name}`} onClick={(e) => {
      e.preventDefault()
      handleStyles(style)
      handleCurrentPhoto(style.photos[0])
    }}></img>
  )
}

export default StylesItem;