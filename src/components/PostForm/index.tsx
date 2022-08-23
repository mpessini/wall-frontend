import { useContext, useState } from 'react'
import WallContext from '../../context/WallContext'
import { createPost } from '../../services/api'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const PostForm = () => {
  const { authTokens } = useContext(WallContext)
  const [postMessage, setPostMessage] = useState<string>('')

  const submitPost = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (authTokens?.access) {
      createPost(postMessage, authTokens.access)
    }
  }
  return (
    <div>
      <form onSubmit={(e) => submitPost(e)}>
        <InputComponent
          type="text"
          placeholder="Write your message..."
          value={postMessage}
          onChange={setPostMessage}
        />
        <ButtonComponent type="submit" name="Send" />
      </form>
    </div>
  )
}
export default PostForm
