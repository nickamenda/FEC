import React from 'react';
import Helpful from './QAEntryComponents/Helpful.jsx';
import AnswerList from './QAEntryComponents/AnswerList.jsx';
import AddAnswerBtn from './QAEntryComponents/AddAnswerBtn.jsx';

const QAEntry = ({ question }) => {
  // console.log(question_body)

  return (
    <div className="QA-entry-container">
        <div className="QA-entry-header">
          <div className="QA-entry-question">
            Q: {question.question_body}
          </div>
          <div className="QA-entry-add-answer-bar">
            <Helpful helpfulCount={question.question_helpfulness} options={{type: 'questions', id: question.question_id}} />
              | <AddAnswerBtn />
          </div>
        </div>
        A:  <AnswerList answers={question.answers}/>
    </div>
  )
}

export default QAEntry;