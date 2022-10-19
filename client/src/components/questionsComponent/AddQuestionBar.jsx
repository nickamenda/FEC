import React from 'react';

const AddQuestionBar = ({ moreQuestionsHandler, addQuestionHandler }) => {
  return (
    <div className="QA-add-question-bar">
      <button className="QA-more-questions-btn" data-testid="more-questions-btn" onClick={e => {moreQuestionsHandler}}>MORE ANSWERED QUESTIONS</button>
      <button className="QA-add-question-btn" onClick={e => {addQuestionsHandler}}>ADD A QUESTION +</button>
    </div>
  )
};

export default AddQuestionBar;