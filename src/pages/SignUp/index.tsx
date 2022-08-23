import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignUpForm from '../../components/SignUpForm'
import TextComponent from '../../components/Text'
import { Container, SignUpContainer } from './styles'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <SignUpContainer>
      <SignUpForm />
      <Container>
        <TextComponent text="Want to go back?" fontFamily="cursive" />
        <ButtonComponent
          type="button"
          name="Back To Login"
          onClick={() => navigate('/')}
        />
      </Container>
    </SignUpContainer>
  )
}

export default SignUp
