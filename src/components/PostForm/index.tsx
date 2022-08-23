import { useContext, useState } from 'react'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const PostForm = () => {
  const { authTokens, handlePostCreation, logout } = useContext(WallContext)
  const [postMessage, setPostMessage] = useState<string>('')

  const submitPost = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (authTokens?.access) {
      handlePostCreation(postMessage, authTokens.access)
    } else {
      logout()
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
          minLength={1}
          required
        />
        <ButtonComponent type="submit" name="Send" />
      </form>
    </div>
  )
}
export default PostForm
