import React, {useState, useEffect} from 'react';

const Characteristics = (props) => {

  const [charFit, setCharFit] = useState({value: '0'})
  const [charLength, setCharLength] = useState({value: '0'})
  const [charComfort, setCharComfort] = useState({value: '0'})
  const [charQuality, setCharQuality] = useState({value: '0'})
  const [charWidth, setCharWidth] = useState({value: '0'})
  const [charSize, setCharSize] = useState({value: '0'})

  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: "#e0e0de",
  }

  useEffect(() => {
    if (props.Quality !== undefined) { setCharQuality(props.Quality) }
    if (props.Fit !== undefined) { setCharFit(props.Fit) }
    if (props.Length !== undefined) { setCharLength(props.Length) }
    if (props.Comfort !== undefined) { setCharComfort(props.Comfort) }
    if (props.Width !== undefined) { setCharWidth(props.Width) }
    if (props.Size !== undefined) { setCharSize(props.Size) }
    console.log('props', props)
  }, [props])

  // useEffect(() => {
  //   fitStyle = {
  //     height: '100%',
  //     width: `${charFit.value * 20}%`,
  //     backgroundColor: 'gery'
  //   }
  // }, [charQuality])

  const labelStyles = {
    marginTop: '-2px',
    color: 'black',
    fontWeight: 'bold'
  }


  const fillerStyles = {
    height: '100%',
    width: `${(charFit.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles2 = {
    height: '100%',
    width: `${(charLength.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles3 = {
    height: '100%',
    width: `${(charComfort.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles4 = {
    height: '100%',
    width: `${(charQuality.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const fillerStyles5 = {
    height: '100%',
    width: `${(charSize.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }
  const fillerStyles6 = {
    height: '100%',
    width: `${(charWidth.value * 25) - 20}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return (
    <div className="characteristics">
      { charFit.value ?
      <div>
        <p className="char-p">Fit</p>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Perfect</p>
          <p className='char-description-p'>Too large</p>
        </div>
      </div>: null}

      { charLength.value ? <div>
        <p className="char-p">Length</p>
        <div style={containerStyles}>
          <div style={fillerStyles2}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too short</p>
          <p className='char-description-p'>Perfect</p>
          <p className='char-description-p'>Too long</p>
        </div>
      </div> : null}

      { charComfort.value ? <div>
        <p className="char-p">Comfort</p>
        <div style={containerStyles}>
          <div style={fillerStyles3}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Poor</p>
          <p className='char-description-p'>Perfect</p>
        </div>
      </div> : null}

      { charQuality.value ? <div>
        <p className="char-p">Quality</p>
        <div style={containerStyles}>
          <div style={fillerStyles4}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Low</p>
          <p className='char-description-p'>High</p>
        </div>
      </div> : null}

      { charSize.value ? <div>
        <p className="char-p">Size</p>
        <div style={containerStyles}>
          <div style={fillerStyles5}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Perfect</p>
          <p className='char-description-p'>Too large!</p>
        </div>
      </div> : null}

      { charWidth.value ? <div>
        <p className="char-p">Width</p>
        <div style={containerStyles}>
          <div style={fillerStyles6}>
            <span style={labelStyles}>▼</span>
          </div>
        </div>
        <div className="char-description">
          <p className='char-description-p'>Too small</p>
          <p className='char-description-p'>Perfect</p>
          <p className='char-description-p'>Too large!</p>
        </div>
      </div> : null}

    </div>

  )
}

export default Characteristics;