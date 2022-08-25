import axios from 'axios'
import { UserCredentials, UserInformations, Headers } from './types'

const baseURL = process.env.REACT_APP_API_BASE_ENDPOINT
const timeout = 10000
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
    refresh
  })
  return response
}

export const postCreation = async (post_message: string, token: string) => {
  axiosInstance.defaults.headers.post['Authorization'] = `Bearer ${token}`
  const response = await axiosInstance.post('post/new/', {
    post_message
  })
  return response
}

export const getPosts = async () => {
  const response = await axiosInstance.get('posts/')
  return response
}
