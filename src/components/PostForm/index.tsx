import { useState } from 'react'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const PostForm = () => {
  const [postMessage, setPostMessage] = useState<string>('')

  const submitPost = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(postMessage)
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
        <ButtonComponent type="button" name="Send" />
      </form>
    </div>
  )
}
export default PostForm
