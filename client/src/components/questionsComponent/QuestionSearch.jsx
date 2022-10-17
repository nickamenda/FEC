import React, { useState } from 'react';
// import styles from './styles.css';

const QuestionSearch = ({searchHandler}) => {
  const [query, setQuery] = useState('');

  const search = () => {
    searchHandler(query);
    setQuery('');
  }

  return (
    <div className={"QA-search-container"}>
      <input onChange={(e => setQuery(e.target.value))} value={query} type="text" className="QA-search-input" />
      🔍
    </div>
  )
}

export default QuestionSearch;