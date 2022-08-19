import ButtonComponent from '../Button'
import InputComponent from '../Input'

const PostForm = () => {
  return (
    <div>
      <form>
        <InputComponent type="text" placeholder="Write your message..." />
        <ButtonComponent type="button" name="Send" />
      </form>
    </div>
  )
}
export default PostForm
