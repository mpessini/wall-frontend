import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignUpForm = () => {
  return (
    <div>
      <form>
        <InputComponent type="text" placeholder="Username" />
        <InputComponent type="email" placeholder="Email" />
        <InputComponent type="password" placeholder="Password" />
        <ButtonComponent type="submit" name="Sign Up" />
      </form>
    </div>
  )
}
export default SignUpForm
