import { useContext } from 'react'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import TextComponent from '../Text'
import { UserContainer } from './styles'

const PostHeader = () => {
  const { logout, user, authTokens } = useContext(WallContext)
  return (
    <UserContainer>
      <TextComponent
        text={`Hello ${user?.username || 'Visitor'}`}
        fontWeight="bold"
      />
      {authTokens && (
        <ButtonComponent
          type="button"
          name="Logout"
          onClick={logout}
          width="10%"
        />
      )}
    </UserContainer>
  )
}
export default PostHeader
