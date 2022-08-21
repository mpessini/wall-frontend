import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignUpForm from '../../components/SignUpForm'
import TextComponent from '../../components/Text'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <main>
      <SignUpForm />
      <TextComponent text="Want to go back?" />
      <ButtonComponent
        type="button"
        name="Back To Login"
        onClick={() => navigate('/')}
      />
    </main>
  )
}

export default SignUp
