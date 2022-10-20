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
    margin: 5
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

  useEffect(() => {
    console.log(charFit)
    fitStyle = {
      height: '100%',
      width: `${charFit.value * 5}%`,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
    console.log('fitzs', fitStyle)
  }, [charQuality])

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }


  const fillerStyles = {
    height: '100%',
    width: `50%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }


  return fitStyle ? (
    <div>
      {/* <div style={containerStyles}>
        <div style={fitStyle}>
          <span style={labelStyles}>hello</span>
        </div>
      </div> */}
    </div>
  ) : null
}

export default Characteristics;