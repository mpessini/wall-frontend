import { ReactNode } from 'react'

export type Context = {
  handleSignIn: (
    username: string,
    password: string
  ) => Promise<number | undefined>
}

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

export type AxiosError = {
  response: {
    status: number
  }
}
