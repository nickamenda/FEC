import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parseQuestions from './lib/parseQuestions.js'

import QuestionSearch from './QuestionSearch.jsx';
import AddQuestionBar from './AddQuestionBar.jsx';
import QAList from './QAList.jsx';

const Question = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [loading, setLoading] = useState(true);

  const filterQuestions = (query) => {

    if (query.length >= 3) {
      let filteredQuestions = questions.filter((question => {
        let pattern = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let queryRegEx = new RegExp(pattern, 'ig');

        if (queryRegEx.test(question.question_body)) {
          return question
        }
      }))
      return setFilteredQuestions(filteredQuestions)
    }
    return setFilteredQuestions(questions)
  }


  useEffect(() => {
    setLoading(true);

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions`, {
      params: {
        product_id: product.id,
        count: 100
      },
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then(res => {
        let parsedQuestions = parseQuestions(res.data);
        setQuestions(parsedQuestions);
        setFilteredQuestions(parsedQuestions);
        setLoading(false);
      })
      .catch(err => console.log('Error: ', err.message))
  }, [])

  const addNewQuestion = (question, nickname, email) => {
    return
  }

  return (
    <section className="question-parent-container">
      <div className="question-header">Question & Answers</div>
      <QuestionSearch searchHandler={filterQuestions}/>
      { loading ? null : <QAList questions={filteredQuestions}/>}
      <AddQuestionBar addQuestionHandler={null}/>
    </section>
  )
}

export default Question;