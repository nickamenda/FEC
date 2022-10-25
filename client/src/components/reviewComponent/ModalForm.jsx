import React, { useEffect, useState } from 'react';

const ModalForm = () => {
  const [starRating, setStarRating] = useState('')
  const [recommend, setRecommend] = useState('')
  const [checked, setChecked] = useState('')
  const [YNchecked, setYNChecked] = useState('')

  const [charSize, setCharSize] = useState('')
  const [sizeChecked, setSizeChecked] = useState('')

  const [charWidth, setWidthSize] = useState('')
  const [widthChecked, setWidthChecked] = useState('')

  const [form, setForm] = useState({})

  useEffect(() => setForm({
    starRating: starRating,
    recommend: recommend
  }), [starRating, recommend])
  return (
    <form onSubmit={(e) => {e.preventDefault(); console.log(form)}}>
      {/* <div className="form-stars">
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
      </div>

      <div className="form-recommend">
        <label>
          <input type="radio" value="yes" onChange={(e) => {setRecommend(e.target.value); setYNChecked(e.target.value)}} checked={YNchecked === 'yes'}/> Yes
        </label>
        <label>
          <input type="radio" value="no" onChange={(e) => {setRecommend(e.target.value); setYNChecked(e.target.value)}} checked={YNchecked === 'no'}/> No
        </label>
      </div> */}
      <div className="form-characteristics-size">
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">A size too small</p>
         <p className="form-p">½ a size too small</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">½ a size too big</p>
         <p className="form-p">A size too wide</p>
        </div>
      </div>
      <div className="form-characteristics-width">
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharSize(e.target.value); setSizeChecked(e.target.value)}} checked={sizeChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">A size too small</p>
         <p className="form-p">½ a size too small</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">½ a size too big</p>
         <p className="form-p">A size too wide</p>
        </div>
      </div>






      <button type="submit">Submit</button>
    </form>


  )
}

export default ModalForm;