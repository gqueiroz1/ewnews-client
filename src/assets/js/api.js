const axios = require('axios')

const api = axios.create({
  baseURL: 'https://ewnews-server.herokuapp.com/',
  // baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export default api
