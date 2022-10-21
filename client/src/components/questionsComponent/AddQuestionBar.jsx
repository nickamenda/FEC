import React from 'react';

const AddQuestionBar = ({ loadQuestionsHandler, addQuestionHandler, showButton }) => {
  return (
    <div className="QA-add-question-bar">
      <button className="QA-more-questions-btn" data-testid="more-questions-btn" style={{display: showButton ? 'inline-block' : 'none' }} onClick={loadQuestionsHandler}>MORE ANSWERED QUESTIONS</button>
      <button className="QA-add-question-btn" onClick={e => {addQuestionsHandler}}>ADD A QUESTION +</button>
    </div>
  )
};

export default AddQuestionBar;