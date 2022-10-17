import React, { useState } from 'react';
// import QuestionSearch from './'
import AddQuestionBar from './AddQuestionBar.jsx';

const Question = ({ id }) => {
  const [questions, setQuestions] = useState()

  const loadMoreQuestions = () => {
    return
  }

  const addNewQuestion = (question, nickname, email) => {
    return
  }

  return (
    <section>
      <div>Question & Answers</div>
      {/* <QuestionSearch /> */}
      {/* <QAList /> */}
      <AddQuestionBar moreQuestionsHandler={null} addQuestionHandler={null}/>
    </section>
  )
}

export default Question;