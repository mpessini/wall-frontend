import axios from 'axios'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'
import { UserCredentials, UserInformations } from './types'

const accessToken = getFromLocalStorage('authTokens')

const baseURL = 'http://localhost:8000/api/'
const timeout = 5000
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken?.access}`
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

export const updateTokens = async (refresh?: string) => {
  const response = await axiosInstance.post('token/refresh/', {
    refresh: refresh
  })
  return response
}
