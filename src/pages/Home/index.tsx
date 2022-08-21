import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignInForm from '../../components/SignInForm'
import TextComponent from '../../components/Text'

const Home = () => {
  const navigate = useNavigate()
  return (
    <main>
      <SignInForm />
      <TextComponent text="New Here?" />
      <ButtonComponent
        type="button"
        name="Sign Up"
        onClick={() => navigate('/signup')}
      />
      <TextComponent text="Just want to take a look?" />
      <ButtonComponent
        type="button"
        name="Enter as a Visitor"
        onClick={() => navigate('/wall')}
      />
    </main>
  )
}

export default Home
