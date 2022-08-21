import axios from 'axios'
import { UserCredentials, UserInformations } from './types'

const baseURL = 'http://localhost:8000/api/'
const timeout = 5000
const headers = {
  'Content-Type': 'application/json'
}

const axiosInstance = axios.create({ baseURL, timeout, headers })

export const signIn = async (credentials: UserCredentials) => {
  const response = await axiosInstance.post('token/', credentials)
  return response
}

export const signUp = async (userInformations: UserInformations) => {
  const response = await axiosInstance.post('signup/', userInformations)
  return response
}
