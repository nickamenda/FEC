require("dotenv").config();

const express = require("express");
const path = require("path");
const axios = require("axios")


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.get('/product', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${req.query.searchFor}`, {
    headers: {
      'Authorization': process.env.AUTH_KEY
    }
  })
    .then((response) => {
      res.writeHead(200, headers)
      res.end(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))
})


app.get('/PO-styles', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${req.query.id}/styles`, {
    headers: {
      'Authorization': process.env.AUTH_KEY
    }
  })
    .then((response) => {
      res.writeHead(200, headers)
      res.end(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))

})
app.get('/PO-meta', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta?product_id=${req.query.currentId}`, {
    headers: {
      'Authorization': process.env.AUTH_KEY
    }
  })
    .then((response) => {
      res.writeHead(200, headers)
      res.end(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))
})

app.get('/PO-reviews', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews?product_id=${req.query.currentId}&count=100`, {
    headers: {
      'Authorization': process.env.AUTH_KEY
    }
  })
    .then((response) => {
      res.writeHead(200, headers)
      res.end(JSON.stringify(response.data))
    })
    .catch(err => console.log(err.message))
})



app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
