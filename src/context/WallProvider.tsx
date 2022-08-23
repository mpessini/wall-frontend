import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import WallContext from './WallContext'
import { AuthToken, Post, Props, User } from './types'
import {
  getPosts,
  postCreation,
  signIn,
  signUp,
  updateTokens
} from '../services/api'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'

function Provider({ children }: Props) {
  const tokens = getFromLocalStorage('authTokens')
  const [authTokens, setAuthTokens] = useState<AuthToken | null>(tokens)
  const [user, setUser] = useState<User | null>(
    tokens ? jwtDecode(tokens.access) : null
  )
  const [posts, setPosts] = useState<Post[]>([])

  const navigate = useNavigate()

  const handleSignIn = async (username: string, password: string) => {
    try {
      const { data } = await signIn({ username, password })
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 0) {
          return toast.error('Something went wrong.')
        }
        toast.error('Incorrect username or password')
      }
    }
  }

  const handleSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      await signUp({ username, email, password })
      toast.success('User created, you will be redirected')
      const twoAndAHalfSeconds = 2500
      setTimeout(() => {
        navigate('/')
      }, twoAndAHalfSeconds)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 0) {
          return toast.error('Something went wrong.')
        }
        const errorMessages = Object.entries(error?.response?.data)
        errorMessages.forEach((error) => {
          toast.error(`${error[0]}: ${error[1]}`)
        })
      }
    }
  }

  const handlePostCreation = async (post: string, token: string) => {
    try {
      await postCreation(post, token)
      handleGetPosts()
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 0) {
          return toast.error('Something went wrong.')
        }
        const errorMessages = Object.entries(error?.response?.data)
        errorMessages.forEach((error) => {
          toast.error(`${error[0]}: ${error[1]}`)
        })
      }
    }
  }

  const handleGetPosts = async () => {
    try {
      const { data } = await getPosts()
      setPosts(data)
    } catch (error) {
      toast.error('Something went wrong.')
      const twoAndAHalfSeconds = 2500
      setTimeout(() => {
        logout()
      }, twoAndAHalfSeconds)
    }
  }

  const logout = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/')
  }

  const handleUpdateTokens = async () => {
    try {
      const { data, status } = await updateTokens(authTokens?.refresh)
      if (status === 200) {
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
      }
    } catch {
      logout()
    }
  }

  useEffect(() => {
    if (authTokens) {
      handleUpdateTokens()
    }
  }, [])

  useEffect(() => {
    const fourMinutes = 4 * 60 * 1000
    const intervalId = setInterval(() => {
      if (authTokens) {
        handleUpdateTokens()
      }
    }, fourMinutes)
    return () => clearInterval(intervalId)
  }, [authTokens])

  const context = {
    handleSignIn,
    handleSignUp,
    handlePostCreation,
    handleGetPosts,
    logout,
    authTokens,
    user,
    posts
  }

  return <WallContext.Provider value={context}>{children}</WallContext.Provider>
}

export default Provider
