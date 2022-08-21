import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WallContext from '../../context/WallContext'
import validateSignUpInformations from '../../utils/validateSignUpInformations'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignUpForm = () => {
  const { handleSignUp } = useContext(WallContext)
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const submitSignUp = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const isValid = validateSignUpInformations(username, email, password)
    if (!isValid) return toast.error('provide valid information.')

    const status = await handleSignUp(username, email, password)
    if (status === 200) {
      const twoAndAHalfSeconds = 2500
      toast.success('User created, you will be redirected')
      setTimeout(() => {
        navigate('/')
      }, twoAndAHalfSeconds)
    } else if (status === 400) {
      toast.error('username already exists.')
    } else {
      toast.error('Something went wrong.')
    }
  }

  return (
    <div>
      <ToastContainer />
      <form onSubmit={(e) => submitSignUp(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
          minLength={3}
          maxLength={24}
          required
        />
        <InputComponent
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
          required
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
          minLength={8}
          maxLength={50}
          required
        />
        <ButtonComponent type="submit" name="Sign Up" />
      </form>
    </div>
  )
}
export default SignUpForm
