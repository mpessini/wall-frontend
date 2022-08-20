import axios from 'axios'

const baseURL = 'http://localhost:8000/api/'
const timeout = 5000
const headers = {
  'Content-Type': 'application/json'
}

const axiosInstance = axios.create({ baseURL, timeout, headers })
