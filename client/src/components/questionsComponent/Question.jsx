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
  // View count for number of questions to display in QAList & Boolean to render more question btn
  const [viewCount, setViewCount] = useState(2);
  const [showButton, setShowButton] = useState(false)

  // Gets and sorts questions for product
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
        if (parsedQuestions.length > viewCount) {
          setShowButton(true);
        }
        setQuestions(parsedQuestions);
        setFilteredQuestions(parsedQuestions);
        setLoading(false);
      })
      .catch(err => console.log('Error: ', err.message))
  }, [])

  // Filters questions by query provided by QuestionSearch component
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

  const addNewQuestion = (question, nickname, email) => {
    return
  }

  // Adjusts the viewCount (number of questions rendering) used in QAList
  const adjustQuestionViewCount = () => {
    let numQuestions = filteredQuestions.length;
    if (numQuestions >= viewCount + 2) {
      setViewCount(viewCount + 2)
    } else if (numQuestions === viewCount + 1) {
      setViewCount(viewCount + 1)
    }
  }

  useEffect(() => {
    if (viewCount >= filteredQuestions.length) {
      setShowButton(false)
    } else {
      setShowButton(true)
    }
  }, [viewCount])

  return (
    <section className="question-parent-container">
      <div className="question-header">Question & Answers</div>
      <QuestionSearch searchHandler={filterQuestions}/>
      { loading ? null : <QAList questions={filteredQuestions} viewCount={viewCount}/>}
      <AddQuestionBar addQuestionHandler={null} loadQuestionsHandler={adjustQuestionViewCount} showButton={showButton}/>
    </section>
  )
}

export default Question;



const adjustCount = () => {
  if (count === 2) {
    setCount(questions.length);
  } else if (count === questions.length) {
    setCount(2);
  }
};