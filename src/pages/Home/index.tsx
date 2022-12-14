import { useNavigate, Navigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignInForm from '../../components/SignInForm'
import TextComponent from '../../components/Text'
import { getFromLocalStorage } from '../../utils/getFromLocalStorage'
import { Container, HomeContainer } from './styles'

const Home = () => {
  const authTokens = getFromLocalStorage('authTokens')
  const navigate = useNavigate()
  if (authTokens) return <Navigate to="/wall" />
  return (
    <HomeContainer>
      <SignInForm />
      <Container>
        <TextComponent text="New Here?" fontFamily="cursive" />
        <ButtonComponent
          type="button"
          name="Sign Up"
          dataTestId="button-signup-navigate"
          onClick={() => navigate('/signup')}
        />
        <TextComponent text="Just want to take a look?" fontFamily="cursive" />
        <ButtonComponent
          type="button"
          name="Enter as a Visitor"
          dataTestId="button-visitor-navigate"
          onClick={() => navigate('/wall')}
        />
      </Container>
    </HomeContainer>
  )
}

export default Home
