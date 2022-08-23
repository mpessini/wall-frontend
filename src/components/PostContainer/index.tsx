import { useContext, useEffect } from 'react'
import WallContext from '../../context/WallContext'
import TextComponent from '../Text'

const PostContainer = () => {
  const { posts, user, handleGetPosts } = useContext(WallContext)

  useEffect(() => {
    handleGetPosts()
  }, [])

  return (
    <div>
      {posts.map(({ id, post_message, owner: { username, id: userId } }) => (
        <div key={id}>
          <TextComponent text={username} />
          <TextComponent text={post_message} />
        </div>
      ))}
    </div>
  )
}
export default PostContainer
