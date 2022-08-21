import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import WallContext from './WallContext'
import { AuthToken, Props, User } from './types'
import { signIn, signUp, updateTokens } from '../services/api'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'

function Provider({ children }: Props) {
  const tokens = getFromLocalStorage('authTokens')
  const [authTokens, setAuthTokens] = useState<AuthToken | null>(tokens)
  const [user, setUser] = useState<User | null>(
    tokens ? jwtDecode(tokens.access) : null
  )

  const navigate = useNavigate()

  const handleSignIn = async (username: string, password: string) => {
    try {
      const { data, status } = await signIn({ username, password })
      if (status === 200) {
        setAuthTokens(data)
        setUser(jwtDecode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        return status
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return error?.response?.status
      }
      return 500
    }
  }

  const handleSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const { data, status } = await signUp({ username, email, password })
      console.log(data, status)
      if (status === 200) {
        return status
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        return error?.response?.status
      }
      return 500
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
    logout,
    authTokens,
    user
  }

  return <WallContext.Provider value={context}>{children}</WallContext.Provider>
}

export default Provider
