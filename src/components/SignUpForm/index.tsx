import { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import InputComponent from '../Input'
import { Form } from './styles'

const SignUpForm = () => {
  const { handleSignUp, isLoading } = useContext(WallContext)
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submitSignUp = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const anyFieldIsEmpty = [username, email, password].some((field) => !field)
    if (anyFieldIsEmpty) {
      return toast.error('Fill in all fields.')
    }
    handleSignUp(username, email, password)
  }

  return (
    <>
      <ToastContainer />
      <Form onSubmit={(e) => submitSignUp(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          dataTestId="input-signup-username"
          onChange={setUsername}
          minLength={3}
          maxLength={24}
          required
        />
        <InputComponent
          type="email"
          placeholder="Email"
          value={email}
          dataTestId="input-signup-email"
          onChange={setEmail}
          required
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          dataTestId="input-signup-password"
          onChange={setPassword}
          minLength={8}
          maxLength={50}
          required
        />
        <ButtonComponent
          type="submit"
          name="Sign Up"
          dataTestId="button-signup"
          isLoading={isLoading.signUp}
        />
      </Form>
    </>
  )
}
export default SignUpForm
