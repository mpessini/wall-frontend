import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export type AuthToken = {
  refresh: string
  access: string
}

export type User = {
  exp: number
  iat: number
  jti: string
  token_type: string
  user_id: number
  username: string
}

export type Context = {
  handleSignIn: (username: string, password: string) => void
  handleSignUp: (username: string, email: string, password: string) => void
  logout: () => void
  authTokens: AuthToken | null
  user: User | null
}
