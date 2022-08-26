import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import WallContext from './WallContext'
import { Post, Props, User } from './types'
import {
  getPosts,
  postCreation,
  signIn,
  signUp,
  updateTokens
} from '../services/api'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'

function Provider({ children }: Props) {
  const authTokens = getFromLocalStorage('authTokens')
  const [user, setUser] = useState<User | null>(
    authTokens ? jwtDecode(authTokens.access) : null
  )
  const [posts, setPosts] = useState<Post[]>([])

  const navigate = useNavigate()

  const handleSignIn = async (username: string, password: string) => {
    try {
      const { data } = await signIn({ username, password })
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      navigate('/wall')
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

  const logout = useCallback(() => {
    localStorage.removeItem('authTokens')
    setUser(null)
    navigate('/')
  }, [navigate])

  const handleGetPosts = useCallback(async () => {
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
  }, [logout])

  const handleUpdateTokens = useCallback(async () => {
    const authTokens = getFromLocalStorage('authTokens')
    if (authTokens) {
      try {
        const { data } = await updateTokens(authTokens?.refresh)
        localStorage.setItem('authTokens', JSON.stringify(data))
      } catch {
        logout()
      }
    }
  }, [logout])

  const context = {
    handleSignIn,
    handleSignUp,
    handlePostCreation,
    handleGetPosts,
    handleUpdateTokens,
    logout,
    user,
    posts
  }

  return <WallContext.Provider value={context}>{children}</WallContext.Provider>
}

export default Provider
