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

export type Post = {
  id: number
  owner: {
    id: number
    username: string
  }
  post_message: string
  created_at: string
  update_at: string
}

export type Context = {
  handleSignIn: (username: string, password: string) => void
  handleSignUp: (username: string, email: string, password: string) => void
  handlePostCreation: (post: string, token: string) => void
  handleGetPosts: () => void
  logout: () => void
  authTokens: AuthToken | null
  user: User | null
  posts: Post[]
}
