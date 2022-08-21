const validateSignUpInformations = (
  username: string,
  email: string,
  password: string
): boolean => {
  const emailRegex = /\S+@\S+\.\S+/
  const usernameIsValid = username.length >= 3 && username.length <= 24
  const emailIsValid = emailRegex.test(email)
  const passwordIsValid = password.length >= 8 && password.length <= 50
  const infosIsValid = [usernameIsValid, emailIsValid, passwordIsValid]
  console.log(usernameIsValid)
  return infosIsValid.every((info) => info)
}

export default validateSignUpInformations
