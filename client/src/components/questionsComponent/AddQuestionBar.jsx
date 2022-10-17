import React, { useState } from 'react';

const AddQuestionBar = ({ moreQuestionsHandler, addQuestionHandler }) => {
  return (
    <section className="QA-add-question-bar">
      <button className="QA-more-questions-btn" onClick={e => {moreQuestionsHandler}}>MORE ANSWERED QUESTIONS</button>
      <button className="QA-add-question-btn" onClick={e => {addQuestionsHandler}}>ADD A QUESTION +</button>
    </section>
  )
};

export default AddQuestionBar;