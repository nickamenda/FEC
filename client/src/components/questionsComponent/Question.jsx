import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        setQuestions(res.data);
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

  return (
    <section>
      <div>Question & Answers</div>
      <QuestionSearch />
      { loading ? null : <QAList questions={questions}/>}
      <AddQuestionBar moreQuestionsHandler={null} addQuestionHandler={null}/>
    </section>
  )
}

export default Question;