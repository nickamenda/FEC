import React, { useState } from 'react';

const AnswerList = ({ answers }) => {
  const [count, setCount] = useState(2)

  console.log('answers', answers)

  return (
    <div className="QA-Answer-List">

    </div>
  )
}

export default AnswerList;