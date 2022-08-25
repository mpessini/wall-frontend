import { Dispatch, SetStateAction } from 'react'
import { Input } from './styles'

type Props = {
  placeholder: string
  type: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
  minLength?: number
  maxLength?: number
  required?: boolean
}

const InputComponent = ({
  type,
  value,
  placeholder,
  onChange,
  minLength,
  maxLength,
  required
}: Props) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      autoComplete={type === 'password' ? 'off' : 'on'}
      onChange={({ target }) => onChange(target.value)}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
  )
}

export default InputComponent
