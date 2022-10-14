import React from 'react';
import ReactDOM from 'react-dom/client';

import Product from './productComponent/Product.jsx'




const App = () => {
  return (
    <>
    <h1 className="title">Shopping</h1>
    <Product currentId={66642}/>
    {/* <QandA />
    <Related /> */}
    {/* <Reviews /> */}

    </>
  )
}

export default App;