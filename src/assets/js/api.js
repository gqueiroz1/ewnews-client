const axios = require('axios')

const api = axios.create({
  baseURL: 'https://ewnews-server.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
