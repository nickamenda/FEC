import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './components/productComponent/Product.jsx'
import QandA from './components/questionsComponent/QandA.jsx'
import Related from './components/relatedComponent/Related.jsx'
import Reviews from  './components/reviewComponent/Reviews.jsx'



const App = () => {
  return (
    <>
    <h1 className="title">Shopping</h1>
    <Product />
    {/* <QandA />
    <Related />
    <Reviews /> */}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)