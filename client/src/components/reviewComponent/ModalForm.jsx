import React, { useEffect, useState } from 'react';

const ModalForm = () => {
  const [starRating, setStarRating] = useState('')
  const [recommend, setRecommend] = useState('')
  const [checked, setChecked] = useState('')
  const [YNchecked, setYNChecked] = useState('')

  // characteristics
  const [charSize, setCharSize] = useState('')
  const [charWidth, setCharWidth] = useState('')
  const [charComfort, setCharComfort] = useState('')
  const [charQuality, setCharQuality] = useState('')
  const [charLength, setCharLength] = useState('')
  const [charFit, setCharFit] = useState('')
  const [sizeChecked, setSizeChecked] = useState('')
  const [widthChecked, setWidthChecked] = useState('')
  const [comfortChecked, setComfortChecked] = useState('')
  const [qualityChecked, setQualityChecked] = useState('')
  const [lengthChecked, setLengthChecked] = useState('')
  const [fitChecked, setFitChecked] = useState('')

  // summary
  const [summary, setSummary] = useState('')

  // final form
  const [form, setForm] = useState({})



  useEffect(() => setForm({
    starRating: starRating,
    recommend: recommend
  }), [starRating, recommend])
  return (
    <form className="form-parent" onSubmit={(e) => {e.preventDefault(); console.log(form)}}>
      <div className="form-stars">
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
      </div>

      <div className="form-characteristics-size">
        <p className="form-subtitle">Size*</p>
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
      <p className="form-subtitle">Width*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharWidth(e.target.value); setWidthChecked(e.target.value)}} checked={widthChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Too narrow</p>
         <p className="form-p">Slightly narrow</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Slightly wide</p>
         <p className="form-p">Too wide</p>
        </div>
      </div>
      <div className="form-characteristics-comfort">
      <p className="form-subtitle">Comfort*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}} checked={comfortChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}} checked={comfortChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharComfort(e.target.value); setComfortChecked(e.target.value)}}  checked={comfortChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Uncomfortable</p>
         <p className="form-p">Slightly uncomfortable</p>
         <p className="form-p">Ok</p>
         <p className="form-p">Comfortable</p>
         <p className="form-p">Perfect</p>
        </div>
      </div>
      <div className="form-characteristics-quality">
      <p className="form-subtitle">Quality*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}}  checked={qualityChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharQuality(e.target.value); setQualityChecked(e.target.value)}} checked={qualityChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Poor</p>
         <p className="form-p">Below average</p>
         <p className="form-p">What I expected</p>
         <p className="form-p">Pretty great</p>
         <p className="form-p">Perfect</p>
        </div>
      </div>
      <div className="form-characteristics-length">
      <p className="form-subtitle">Length*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}} checked={lengthChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}}   checked={lengthChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharLength(e.target.value); setLengthChecked(e.target.value)}}  checked={lengthChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Runs short</p>
         <p className="form-p">Runs slightly short</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Runs slightly long</p>
         <p className="form-p">Runs long</p>
        </div>
      </div>
      <div className="form-characteristics-fit">
      <p className="form-subtitle">Fit*</p>
        <div className="form-wrapper">

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="1" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '1'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="2" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '2'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="3" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '3'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="4" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '4'}/>
              </label>
            </div>
          </div>

          <div className="form-characteristics">
            <div>
              <label>
                <input type="radio" value="5" onChange={(e) => {setCharFit(e.target.value); setFitChecked(e.target.value)}} checked={fitChecked === '5'}/>

              </label>
            </div>
          </div>
        </div>
        <div className="form-wrapper-p">
         <p className="form-p">Runs tight</p>
         <p className="form-p">Runs slightly tight</p>
         <p className="form-p">Perfect</p>
         <p className="form-p">Runs slightly long</p>
         <p className="form-p">Runs long</p>
        </div>
      </div>

      <div className="form-summary">
        <label>
          <textarea value={summary} required className="form-summary" rows={5} cols={60} maxLength={1000} onChange={e => setSummary(e.target.value)} placeholder="Example: Best purchase ever!"/>
        </label>

      </div>
      <button type="submit">Submit</button>
    </form>


  )
}

export default ModalForm;