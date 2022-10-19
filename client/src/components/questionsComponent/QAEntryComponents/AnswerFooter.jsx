import React from 'react';
import Axios from 'axios';
import { format, parseISO } from 'date-fns';
import Helpful from './Helpful.jsx';
import ReportBtn from './ReportBtn.jsx';

const AnswerFooter = ({ answer }) => {

  return (
    <div className="QA-answer-footer">
      <span className="QA-answer-by-date">by {answer.answerer_name}, {format(parseISO(answer.date), 'MMM d\, YYY')}</span>
      |<Helpful className="QA-answer-helpful" helpfulCount={answer.helpfulness} options={{type: 'answers', id: answer.id}} />
      |<ReportBtn options={{type: 'answers', id: answer.id}} />
    </div>
  )
}

export default AnswerFooter;