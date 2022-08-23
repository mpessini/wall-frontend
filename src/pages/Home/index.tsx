import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignInForm from '../../components/SignInForm'
import TextComponent from '../../components/Text'
import WallContext from '../../context/WallContext'
import { Container, HomeContainer } from './styles'

const Home = () => {
  const { user } = useContext(WallContext)
  const navigate = useNavigate()
  if (user) return <Navigate to="/wall" />
  return (
    <HomeContainer>
      <SignInForm />
      <Container>
        <TextComponent text="New Here?" fontFamily="cursive" />
        <ButtonComponent
          type="button"
          name="Sign Up"
          onClick={() => navigate('/signup')}
        />
        <TextComponent text="Just want to take a look?" fontFamily="cursive" />
        <ButtonComponent
          type="button"
          name="Enter as a Visitor"
          onClick={() => navigate('/wall')}
        />
      </Container>
    </HomeContainer>
  )
}

export default Home
