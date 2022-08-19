import { useState } from 'react'
import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignUpForm = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submitSignUp = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(username, email, password)
  }
  return (
    <div>
      <form onSubmit={(e) => submitSignUp(e)}>
        <InputComponent
          type="text"
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <InputComponent
          type="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <InputComponent
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
        <ButtonComponent type="submit" name="Sign Up" />
      </form>
    </div>
  )
}
export default SignUpForm
