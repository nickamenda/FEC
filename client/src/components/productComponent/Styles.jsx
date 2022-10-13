import React, { useState } from 'react';
import StylesItem from './StylesItem.jsx';

const RenderStyles = (props) => {
  const { styles, handleStyles } = props
  return (
    <>
    {styles.map(style => {
      return (
        <StylesItem style={style} key={style.style_id} handleStyles={handleStyles}/>
      )
    })}

    </>
  )
}

export default RenderStyles;