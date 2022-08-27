import { Dispatch, SetStateAction } from 'react'
import { Input } from './styles'

type TProps = {
  placeholder: string
  type: string
  value: string
  dataTestId?: string
  onChange: Dispatch<SetStateAction<string>>
  minLength?: number
  maxLength?: number
  required?: boolean
}

const InputComponent = ({
  type,
  value,
  placeholder,
  dataTestId,
  onChange,
  minLength,
  maxLength,
  required
}: TProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      autoComplete={type === 'password' ? 'off' : 'on'}
      data-testid={dataTestId}
      onChange={({ target }) => onChange(target.value)}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
  )
}

export default InputComponent
