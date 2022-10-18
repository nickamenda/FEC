import React from 'react';
import Helpful from './QAEntryComponents/Helpful.jsx';
import AnswerList from './QAEntryComponents/AnswerList.jsx';

const QAEntry = ({ question }) => {
  // console.log(question_body)

  return (
    <div className="QA-entry-container">
      <div className="QA-entry-question">
        Q: {question.question_body}
      </div>
      <div className="QA-entry-add-answer-bar">
        <Helpful helpfulCount={question.question_helpfulness} options={{type: 'questions', id: question.question_id}} />
          | <span className="QA-entry-add-answer-btn">Add Answer</span>
      </div>
      {/* <AnswerList /> */}
    </div>
  )
}

export default QAEntry;