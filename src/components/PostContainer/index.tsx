import { useContext, useEffect } from 'react'
import WallContext from '../../context/WallContext'
import TextComponent from '../Text'
import { Post, PostsContainer } from './styles'

const PostContainer = () => {
  const { posts, handleGetPosts } = useContext(WallContext)

  useEffect(() => {
    handleGetPosts()
  }, [])

  return (
    <PostsContainer>
      {posts.map(({ id, post_message, owner: { username } }) => (
        <Post key={id}>
          <TextComponent text={username} fontWeight="bold" />
          <TextComponent text={post_message} fontSize="25px" />
        </Post>
      ))}
    </PostsContainer>
  )
}
export default PostContainer
