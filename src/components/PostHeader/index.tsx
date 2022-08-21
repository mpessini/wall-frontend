import { useContext } from 'react'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import TextComponent from '../Text'

const PostHeader = () => {
  const { logout, user, authTokens } = useContext(WallContext)
  return (
    <div>
      <TextComponent text={`Hello ${user?.username || 'Visitor'}`} />
      {authTokens && (
        <ButtonComponent type="button" name="Logout" onClick={logout} />
      )}
    </div>
  )
}
export default PostHeader
