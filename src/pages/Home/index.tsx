import { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import ButtonComponent from '../../components/Button'
import SignInForm from '../../components/SignInForm'
import TextComponent from '../../components/Text'
import WallContext from '../../context/WallContext'

const Home = () => {
  const { user } = useContext(WallContext)
  const navigate = useNavigate()
  if (user) return <Navigate to="/wall" />
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
