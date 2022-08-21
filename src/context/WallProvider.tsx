import WallContext from './WallContext'
import jwtDecode from 'jwt-decode'
import { AuthToken, Props, User } from './types'
import { signIn } from '../services/api'
import { useState } from 'react'
import { getFromLocalStorage } from '../utils/getFromLocalStorage'
import { AxiosError } from 'axios'

function Provider({ children }: Props) {
  const tokens = getFromLocalStorage('authTokens')
  const [authTokens, setAuthTokens] = useState<AuthToken | null>(tokens)
  const [user, setUser] = useState<User | null>(
    tokens ? jwtDecode(tokens.access) : null
  )

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
    }
  }

  const context = {
    handleSignIn,
    user
  }

  return <WallContext.Provider value={context}>{children}</WallContext.Provider>
}

export default Provider
