import React from 'react';
import Helpful from './Helpful.jsx';
import Axios from 'axios';
import { format, parseISO } from 'date-fns'

const AnswerFooter = ({ answer }) => {

  return (
    <div className="QA-answer-footer">
      by {answer.answerer_name}, {format(parseISO(answer.date), 'MMM d\, YYY')}
    </div>
  )
}

export default AnswerFooter;