import React from 'react';

const QAEntry = ({ question }) => {
  // console.log(question_body)

  return (
    <div className="QA-entry-container">
      <div className="QA-entry-question">
        Q: {question.question_body}
      </div>
      <div className="QA-entry">
        {/* <Helpful /> */} | <span className="QA-entry-add-answer">Add Answer</span>
      </div>
    </div>
  )
}

export default QAEntry;