import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswerList = ({ answers }) => {
  const [count, setCount] = useState(2)

  console.log('answers', answers)

  return (
    <div className="QA-Answer-List">
      {
        answers.length ? <div className="QA-no-answers">Be the first to respond</div>
          : answers.map((answer, i) => {
            if (i < count) return  <AnswerEntry answer={answer} key={answer.id} />
          })
      }
    </div>
  )
}

export default AnswerList;