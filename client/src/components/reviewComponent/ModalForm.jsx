import React, { useEffect, useState } from 'react';

const ModalForm = () => {
  const [starRating, setStarRating] = useState('')
  const [recommend, setRecommend] = useState('')
  const [checked, setChecked] = useState('')
  const [YNchecked, setYNChecked] = useState('')

  const [form, setForm] = useState({})

  useEffect(() => setForm({
    starRating: starRating,
    recommend: recommend
  }), [starRating, recommend])
  return (
    <form onSubmit={(e) => {e.preventDefault(); console.log(form)}}>
      <div>
        <label>
          <input
          type="radio"
          value="1"
          onChange={(e) => {setStarRating(e.target.value); setChecked(e.target.value)}}
          checked={checked === '1'}
          /> 1 star - “Poor”
        </label>
      </div>
      <div>
        <label>
          <input
          type="radio"
          value="2"
          onChange={(e) => {setStarRating(e.target.value); setChecked(e.target.value)}}
          checked={checked === '2'}
          /> 2 stars - “Fair”
        </label>
      </div>
      <div>
        <label>
          <input
          type="radio"
          value="3"
          onChange={(e) => {setStarRating(e.target.value); setChecked(e.target.value)}}
          checked={checked === '3'}
          /> 3 stars - “Average”
        </label>
      </div>
      <div>
        <label>
          <input
          type="radio"
          value="4"
          onChange={(e) => {setStarRating(e.target.value); setChecked(e.target.value)}}
          checked={checked === '4'}
          /> 4 stars - “Good”
        </label>
      </div>
      <div>
        <label>
          <input
          type="radio"
          value="5"
          onChange={(e) => {setStarRating(e.target.value); setChecked(e.target.value)}}
          checked={checked === '5'}
          /> 5 stars - “Great”
        </label>
      </div>

      <div className="form-recommend">
        <label>
          <input type="radio" value="yes" onChange={(e) => {setRecommend(e.target.value); setYNChecked(e.target.value)}} checked={YNchecked === 'yes'}/> Yes
        </label>
        <label>
          <input type="radio" value="no" onChange={(e) => {setRecommend(e.target.value); setYNChecked(e.target.value)}} checked={YNchecked === 'no'}/> No
        </label>
      </div>




      <button type="submit">Submit</button>
    </form>


  )
}

export default ModalForm;