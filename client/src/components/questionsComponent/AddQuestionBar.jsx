import React, { useRef } from 'react';
import Modal from './Modal.jsx';

const AddQuestionBar = ({ loadQuestionsHandler, showButton }) => {
  const modal = useRef(null);
  return (
    <>
    <div className="QA-add-question-bar">
      <button className="QA-more-questions-btn" data-testid="more-questions-btn" style={{display: showButton ? 'inline-block' : 'none' }} onClick={loadQuestionsHandler}>MORE ANSWERED QUESTIONS</button>
      <button className="QA-add-question-btn" onClick={e => modal.current.open()}>ADD A QUESTION +</button>
    </div>
    <Modal ref={modal}>
      Test of your modal broadcasting system
    </Modal>
    </>
  )
};

export default AddQuestionBar;