import ButtonComponent from '../Button'
import TextComponent from '../Text'

const PostHeader = () => {
  return (
    <div>
      <TextComponent text="Hello Visitor" />
      <ButtonComponent type="button" name="Logout" />
    </div>
  )
}
export default PostHeader
