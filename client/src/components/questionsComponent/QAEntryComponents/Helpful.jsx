import React, { useState } from 'react';
import axios from 'axios';

// Takes an options object with type, either questions or answers and id of the question or answer
const Helpful = ({ helpfulCount, options }) => {

  const increaseHelpfulCount = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/${options.type}/${options.id}/helpful`)
  }

  const once = (func, context, ...args) => {
    let result;
    return () => {
      result = func.apply(context || this, args);
      func = null;
    }
    return result;
  }

  const markHelpful = once(increaseHelpfulCount)

  return (
    <>
      Helpful? <span className="QA-helpful-btn">Yes ({helpfulCount})</span>
    </>

  )
}

export default Helpful;