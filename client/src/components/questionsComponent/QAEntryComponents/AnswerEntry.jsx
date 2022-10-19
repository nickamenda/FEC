import React from 'react';
import AnswerFooter from './AnswerFooter.jsx';

const AnswerEntry = ({ answer }) => {
  console.log('AnswerEntry', answer)
  return (
  <div className="QA-answer-entry-container">
    <div className="QA-answer-body">
      {answer.body}
    </div>
    <>
    {answer.photos.length !== 0 ? answer.photos.map((photo, i) => {
        return <img src={photo} key={i} className="QA-answer-img" alt="Pictures provided by poster" />
      }) : null}
    </>
    <AnswerFooter answer={answer}/>
  </div>
  )
}

export default AnswerEntry;