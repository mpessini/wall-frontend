import ButtonComponent from '../Button'
import InputComponent from '../Input'

const SignInForm = () => {
  return (
    <div>
      <form>
        <InputComponent type="text" placeholder="Username" />
        <InputComponent type="password" placeholder="Password" />
        <ButtonComponent type="submit" name="Sign In" />
      </form>
    </div>
  )
}
export default SignInForm
