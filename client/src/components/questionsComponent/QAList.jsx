import React, { useState } from 'react';
import QAEntry from './QAEntry.jsx';

const QAList = ({ questions, viewCount }) => {

  return (
    <div className="QA-question-list">
      { !questions.length ? null :
          questions.map((question, i) => {
            if (i < viewCount) return <QAEntry question={question} key={question.question_id} />
          })}
    </div>
  )
}

export default QAList;