import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import PostContainer from '../../components/PostContainer'
import PostForm from '../../components/PostForm'
import PostHeader from '../../components/PostHeader'
import WallContext from '../../context/WallContext'
import { Container, WallContainer } from './styles'

const Wall = () => {
  const { authTokens } = useContext(WallContext)
  const navigate = useNavigate()
  return (
    <WallContainer>
      <Container>
        <PostHeader />
        <PostContainer />
        {authTokens ? (
          <PostForm />
        ) : (
          <ButtonComponent
            type="button"
            name="Sign In"
            onClick={() => navigate('/')}
          />
        )}
      </Container>
    </WallContainer>
  )
}

export default Wall
