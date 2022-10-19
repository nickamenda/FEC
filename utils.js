import axios from "axios"


export const fetchData = async () => {
  try{
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/66645`, {
      headers: {
        'Authorization': process.env.AUTH_KEY
      }
    })
      .then((res) => {
        return res.data
      })
  } catch (err) {
    return {}
  }
}