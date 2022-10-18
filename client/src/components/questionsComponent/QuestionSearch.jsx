import React, { useState } from 'react';
import './styles.css';

const QuestionSearch = ({searchHandler}) => {
  const [query, setQuery] = useState('');

  const search = () => {
    searchHandler(query);
    setQuery('');
  }

  return (
    <div className={"QA-search-container"}>
      <input onChange={(e => setQuery(e.target.value))} value={query} type="text" className="question-input" placeholder="Have a question? Search for answers" />
      <span id="search-icon">🔍</span>
    </div>
  )
}

export default QuestionSearch;