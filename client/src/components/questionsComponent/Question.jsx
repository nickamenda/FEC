import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parseQuestions from './lib/parseQuestions.js'

import QuestionSearch from './QuestionSearch.jsx';
import AddQuestionBar from './AddQuestionBar.jsx';
import QAList from './QAList.jsx';

const Question = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true);

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions`, {
      params: {
        product_id: product.id,
        count: 50
      },
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then(res => {
        setQuestions(parseQuestions(res.data));
        setLoading(false);
      })
      .catch(err => console.log('Error: ', err.message))
  }, [])

  const loadMoreQuestions = () => {
    return
  }

  const addNewQuestion = (question, nickname, email) => {
    return
  }

  useEffect(() => console.log('questions', questions))

  return (
    <section className="question-parent-container">
      <div className="question-header">Question & Answers</div>
      <QuestionSearch searchHandler={null}/>
      { loading ? null : <QAList questions={questions}/>}
      <AddQuestionBar moreQuestionsHandler={null} addQuestionHandler={null}/>
    </section>
  )
}

export default Question;