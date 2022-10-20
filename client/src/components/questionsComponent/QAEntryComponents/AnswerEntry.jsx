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
<<<<<<< HEAD
}

export default AnswerEntry
=======
  )
}

export default AnswerEntry;
>>>>>>> b6056cc11076333f77169e9ccec91d974a2a5ee0
