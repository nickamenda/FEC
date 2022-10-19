import React, { useState } from 'react';
import axios from 'axios';

// Takes an options object with type, either questions or answers and id of the question or answer
const Helpful = ({ helpfulCount, options }) => {
  const [marked, setMarked] = useState(false)
  const [count, setCount] = useState(helpfulCount)

  const increaseHelpfulCount = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/${options.type}/${options.id}/helpful`, undefined ,{
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then(res => {
        setMarked(true);
        setCount(count + 1)
      })
      .catch(err => console.log('Can\'t mark helpful', err.message))
  }

  const markHelpful = () => {
    if (!marked) {
      return increaseHelpfulCount()
    }
    console.log('Already Marked as Helpful')
  }

  return (
    <span className="QA-helpful-btn" onClick={e => markHelpful()}>Helpful? <span className="QA-helpful-yes">Yes</span>({count})</span>
  )
}

export default Helpful;