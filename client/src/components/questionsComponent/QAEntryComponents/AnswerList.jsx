import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswerList = ({ answers }) => {
  const [count, setCount] = useState(2)

  return (
    <div className="QA-answer-list">
      { answers.length > 0 ? answers.map((answer, i) => {
          if (i < count) return (<AnswerEntry answer={answer} key={answer.id} />)
          })
            : <div className="QA-no-answers">Be the first to respond</div>
      }
    </div>
  )
}

export default AnswerList;