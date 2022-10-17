import React from 'react';
import QAEntry from './QAEntry.jsx';

const QAList = ({ questions }) => {

  return (
    <div className="QA-question-list">
      { !questions.results.length ? null :
          questions.results.map(question => {
            return (
              <QAEntry question={question} key={question.question_id} />
            );
          })}
    </div>
  )
}

export default QAList;