const axios = require('axios')

const request = axios.create({
  timeout: 5000,
  baseURL: '',
})

module.exports = axios
