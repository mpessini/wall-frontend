import { useContext } from 'react'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import TextComponent from '../Text'
import { UserContainer } from './styles'

type Props = {
  authTokens: {
    refresh: string
    access: string
  }
}

const PostHeader = ({ authTokens }: Props) => {
  const { logout, user } = useContext(WallContext)
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
          dataTestId="button-logout"
          onClick={logout}
          width="10%"
        />
      )}
    </UserContainer>
  )
}
export default PostHeader
