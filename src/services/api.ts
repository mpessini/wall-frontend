import axios from 'axios'
import { UserCredentials, UserInformations, Headers } from './types'

const baseURL = 'http://localhost:8000/api/'
const timeout = 5000
const headers: Headers = {
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

export const updateTokens = async (refresh?: string) => {
  const response = await axiosInstance.post('token/refresh/', {
    refresh: refresh
  })
  return response
}

export const createPost = async (post: string, token: string) => {
  axiosInstance.defaults.headers.post['Authorization'] = `Bearer ${token}`
  const response = await axiosInstance.post('post/create/', {
    post
  })
  return response
}
