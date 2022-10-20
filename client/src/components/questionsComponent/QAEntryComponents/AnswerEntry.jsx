import React from 'react';
import AnswerFooter from './AnswerFooter.jsx';

const AnswerEntry = ({ answer }) => {
  console.log('AnswerEntry', answer)
  return (
  <div className="QA-answer-entry-container">
    <div className="QA-answer-body">
      {answer.body}
    </div>
    <AnswerFooter answer={answer}/>
  </div>
  )
}

export default AnswerEntry;
