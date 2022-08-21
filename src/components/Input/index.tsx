import { Dispatch, SetStateAction } from 'react'

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
    <input
      type={type}
      placeholder={placeholder}
      onChange={({ target }) => onChange(target.value)}
      value={value}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
    />
  )
}

export default InputComponent
