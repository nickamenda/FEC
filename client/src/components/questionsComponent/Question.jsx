import React from 'react';
import { useState } = React;
import QuestionSearch from './'

export default Question = () => {
  return (
    <section>
      <div>Question & Answers</div>
      <QuestionSearch />
      <QAList />
      <AddQuestionBar />
    </section>
  )
}