type Props = {
  placeholder: string
  type: string
  value?: string
  onChange?: () => void
  required?: boolean
}

const InputComponent = ({
  placeholder,
  type,
  value,
  required,
  onChange
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  )
}

export default InputComponent
