import React, { useState } from 'react';
// import QuestionSearch from './'

const Question = () => {
  return (
    <section>
      <div>Question & Answers</div>
      <QuestionSearch />
      <QAList />
      <AddQuestionBar />
    </section>
  )
}

export default Question;