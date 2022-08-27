import { useContext, useState } from 'react'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import InputComponent from '../Input'
import { Form } from './styles'

type TProps = {
  authTokens: {
    refresh: string
    access: string
  }
}

const PostForm = ({ authTokens }: TProps) => {
  const { handlePostCreation, logout, isLoading } = useContext(WallContext)
  const [postMessage, setPostMessage] = useState<string>('')

  const submitPost = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (authTokens?.access) {
      handlePostCreation(postMessage, authTokens.access)
      setPostMessage('')
    } else {
      logout()
    }
  }
  return (
    <>
      <Form onSubmit={(e) => submitPost(e)}>
        <InputComponent
          type="text"
          placeholder="Write your message..."
          value={postMessage}
          dataTestId="input-post-message"
          onChange={setPostMessage}
          minLength={1}
          required
        />
        <ButtonComponent
          type="submit"
          name="Send"
          width="20%"
          dataTestId="button-post-submit"
          isLoading={isLoading.postSubmit}
        />
      </Form>
    </>
  )
}
export default PostForm
