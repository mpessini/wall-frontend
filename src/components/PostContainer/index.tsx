import { useContext, useEffect, useRef } from 'react'
import WallContext from '../../context/WallContext'
import TextComponent from '../Text'
import { Post, PostsContainer } from './styles'

const PostContainer = () => {
  const { posts, handleGetPosts } = useContext(WallContext)
  const bottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    handleGetPosts()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [posts])

  return (
    <PostsContainer>
      {posts.map(({ id, post_message, owner: { username } }) => (
        <Post key={id}>
          <TextComponent text={username} fontWeight="bold" />
          <TextComponent text={post_message} fontSize="25px" />
        </Post>
      ))}
      <div ref={bottomRef} />
    </PostsContainer>
  )
}
export default PostContainer
