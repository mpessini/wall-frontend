import { ReactNode } from 'react'

export type TProps = {
  children: ReactNode
}

export type TAuthTokens = {
  refresh: string
  access: string
}

export type TIsLoading = {
  signUp: boolean
  signIn: boolean
  postSubmit: boolean
}

export type TUser = {
  exp: number
  iat: number
  jti: string
  token_type: string
  user_id: number
  username: string
}

export type TPost = {
  id: number
  owner: {
    id: number
    username: string
  }
  post_message: string
  created_at: string
  update_at: string
}

export type TContext = {
  handleSignIn: (username: string, password: string) => void
  handleSignUp: (username: string, email: string, password: string) => void
  handlePostCreation: (post: string, token: string) => void
  handleGetPosts: () => void
  handleUpdateTokens: () => void
  logout: () => void
  user: TUser | null
  posts: TPost[]
  isLoading: TIsLoading
}
