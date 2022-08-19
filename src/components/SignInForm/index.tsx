import { useState } from 'react'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignInForm = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submitSignIn = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(username, password)
  }
  return (
    <div>
      <form onSubmit={(e) => submitSignIn(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <ButtonComponent type="submit" name="Sign In" />
      </form>
    </div>
  )
}
export default SignInForm
