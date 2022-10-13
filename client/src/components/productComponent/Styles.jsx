import React, { useState } from 'react';
import StylesItem from './StylesItem.jsx';

const RenderStyles = (props) => {
  const { styles, handleStyles, handleCurrentPhoto } = props
  return (
    <div className="product styles all-styles">
    {styles.map(style => {
      return (
        <StylesItem style={style} key={style.style_id} handleStyles={handleStyles} handleCurrentPhoto={handleCurrentPhoto}/>
      )
    })}
    </div>
  )
}

export default RenderStyles;