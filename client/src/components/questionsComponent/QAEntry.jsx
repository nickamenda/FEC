import React from 'react';
import Helpful from './QAEntryComponents/Helpful.jsx';

const QAEntry = ({ question }) => {
  // console.log(question_body)

  return (
    <div className="QA-entry-container">
      <div className="QA-entry-question">
        Q: {question.question_body}
      </div>
      <div className="QA-entry">
        <Helpful helpfulCount={question.question_helpfulness} options={{type: 'questions', id: question.question_id}} /> | <span className="QA-entry-add-answer">Add Answer</span>
      </div>
    </div>
  )
}

export default QAEntry;