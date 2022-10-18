import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Product from './productComponent/Product.jsx'
import Reviews from './reviewComponent/Reviews.jsx'
import Question from './questionsComponent/Question.jsx'


const App = () => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66645`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        setProduct(res.data)
      })
      .catch(err => console.log(err.message))
  }, [])


  return Object.keys(product).length !== 0 ? (
    <>
    <div className="navbar"></div>
    <Product product={product} />
    <Related />
    <Question product={product}/>
    <Reviews product={product}/>
    </>
  ) : null
}

export default App;