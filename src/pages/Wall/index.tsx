import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WallContext from '../../context/WallContext'
import { getFromLocalStorage } from '../../utils/getFromLocalStorage'
import ButtonComponent from '../../components/Button'
import PostContainer from '../../components/PostContainer'
import PostForm from '../../components/PostForm'
import PostHeader from '../../components/PostHeader'
import { Container, WallContainer } from './styles'

const Wall = () => {
  const authTokens = getFromLocalStorage('authTokens')
  const { handleUpdateTokens } = useContext(WallContext)
  const navigate = useNavigate()

  useEffect(() => {
    handleUpdateTokens()
    const fourMinutes = 4 * 60 * 1000
    const intervalId = setInterval(() => {
      handleUpdateTokens()
    }, fourMinutes)
    return () => clearInterval(intervalId)
  }, [handleUpdateTokens])

  return (
    <WallContainer>
      <Container>
        <PostHeader authTokens={authTokens} />
        <PostContainer />
        {authTokens ? (
          <PostForm authTokens={authTokens} />
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
