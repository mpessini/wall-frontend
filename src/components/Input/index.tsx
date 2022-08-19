import { Dispatch, SetStateAction } from 'react'

type Props = {
  placeholder: string
  type: string
  value: string
  onChange: Dispatch<SetStateAction<string>>
  minLength?: number
  required?: boolean
}

const InputComponent = ({
  type,
  value,
  placeholder,
  onChange,
  minLength,
  required
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={({ target }) => onChange(target.value)}
      value={value}
      minLength={minLength}
      required={required}
    />
  )
}

export default InputComponent
