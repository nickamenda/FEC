import React, { useState, useRef } from 'react';
import axios from 'axios';
import Modal from '../Modal.jsx';


const AddQuestion = ({productInfo, close}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  const submitQuestion = event => {
    event.preventDefault();
    console.log({
      body,
      name,
      email,
      product_id: productInfo.id
    })
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',  {
      body,
      name,
      email,
      product_id: productInfo.id
    }, {
     headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
    .then(() => close())
    .catch(err => setError(err.message))
  }

  return (
    <div className="QA-add-question-container">
      <h1>Ask Your Question</h1>
      <h2>About the {productInfo.name}</h2>
      <form className="QA-form" onSubmit={submitQuestion}>
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
        {error ? <div className="add-question-error">{error}</div> : null}
        <button id="QA-submit-question-btn" type="submit">Submit Question</button>
      </form>
    </div>
  )
}

export default AddQuestion;