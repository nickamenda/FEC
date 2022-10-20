import React, { useState } from 'react';
import StylesItem from './StylesItem.jsx';
import { v4 as uuidv4 } from 'uuid';


const RenderStyles = (props) => {
  const { styles, handleStyles, handleCurrentPhoto, currentStyle } = props
  return (
    <div className="product styles all-styles">
      {styles.map(style => {
        return (
          <StylesItem style={style} key={uuidv4()} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto} currentStyle={currentStyle} />
        )
      })}
    </div>
  )
}

export default RenderStyles;