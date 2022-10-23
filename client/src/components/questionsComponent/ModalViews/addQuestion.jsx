import React, { useState } from 'react';
import axios from 'axios';

const AddQuestion = ({productInfo}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [isValid, setIsValid] = useState(true)


  return (
    <div className="QA-add-question-container">
      <h1>Ask Your Question</h1>
      <h2>About the {productInfo.name}</h2>
      <form className="QA-form">
        <label>
        Your Question*
        <textarea value={body} required id="addQuestionBody" className="QA-add-question-textarea" rows={5} cols={60} maxLength={1000} onChange={e => setBody(e.target.value)} />
        </label>
        <label>
        What is your nickname*
        <input type="text" value={name} required placeholder=' “Example: jackson11!”' id="addQuestionName" className="QA-add-question-input" onChange={e => setName(e.target.value)} />
        </label>
        <label>
        Your email*
        <input type="email" value={email} required id="addQuestionEmail" className="QA-add-question-input" onChange={e => setEmail(e.target.value)} />
        </label>
        <button id="QA-submit-question-btn" disabled={isValid ? false : true} onClick={null}>Submit Question</button>
      </form>
    </div>
  )
}

export default AddQuestion;