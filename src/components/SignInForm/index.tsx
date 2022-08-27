import { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WallContext from '../../context/WallContext'
import ButtonComponent from '../Button'
import InputComponent from '../Input'
import { Form } from './styles'

const SignInForm = () => {
  const { handleSignIn, isLoading } = useContext(WallContext)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submitSignIn = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const anyFieldIsEmpty = [username, password].some((field) => !field)
    if (anyFieldIsEmpty) {
      return toast.error('Fill in all fields.')
    }
    handleSignIn(username, password)
  }

  return (
    <>
      <ToastContainer />
      <Form onSubmit={(e) => submitSignIn(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          dataTestId="input-signin-username"
          onChange={setUsername}
          required
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          dataTestId="input-signin-password"
          onChange={setPassword}
          required
        />
        <ButtonComponent
          type="submit"
          name="Sign In"
          dataTestId="button-signin"
          isLoading={isLoading.signIn}
        />
      </Form>
    </>
  )
}
export default SignInForm
