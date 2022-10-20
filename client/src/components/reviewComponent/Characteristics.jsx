import React, {useState, useEffect} from 'react';

const Characteristics = (props) => {

  const [charFit, setCharFit] = useState({value: '1'})
  const [charLength, setCharLength] = useState({value: '1'})
  const [charComfort, setCharComfort] = useState({value: '1'})
  const [charQuality, setCharQuality] = useState({value: '1'})

  let fitStyle;
  let lengthStyle = {};
  let comfortStyle = {};
  let qualityStyle = {};

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
  }

  useEffect(() => {
    if (props.Quality !== undefined) {
      setCharFit(props.Fit);
      setCharLength(props.Length);
      setCharComfort(props.Comfort);
      setCharQuality(props.Quality);
      console.log('props', props)
    }
  }, [props])

  // useEffect(() => {
  //   fitStyle = {
  //     height: '100%',
  //     width: `${charFit.value * 20}%`,
  //     backgroundColor: 'gery'
  //   }
  // }, [charQuality])

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }


  const fillerStyles = {
    height: '100%',
    width: `${charFit.value * 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles2 = {
    height: '100%',
    width: `${charLength.value * 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles3 = {
    height: '100%',
    width: `${charComfort.value * 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles4 = {
    height: '100%',
    width: `${charQuality.value * 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return (
    <div className="characteristics">

      <div>
        <p className="char-p">Fit</p>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Too large</p>
        </div>
      </div>

      <div>
        <p className="char-p">Length</p>
        <div style={containerStyles}>
          <div style={fillerStyles2}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Too large</p>
        </div>
      </div>

      <div>
        <p className="char-p">Comfort</p>
        <div style={containerStyles}>
          <div style={fillerStyles3}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Too large</p>
        </div>
      </div>

      <div>
        <p className="char-p">Quality</p>
        <div style={containerStyles}>
          <div style={fillerStyles4}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Too large</p>
        </div>
      </div>

    </div>

  )
}

export default Characteristics;