import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignInForm = () => {
  const { handleSignIn } = useContext(WallContext)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const submitSignIn = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const status = await handleSignIn(username, password)
    if (status === 200) {
      navigate('/wall')
    } else if (status === 401) {
      toast.error('Incorrect username or password.')
    } else {
      toast.error('Something went wrong.')
    }
  }

  return (
    <div>
      <ToastContainer />
      <form onSubmit={(e) => submitSignIn(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
          required
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
          required
        />
        <ButtonComponent type="submit" name="Sign In" />
      </form>
    </div>
  )
}
export default SignInForm
