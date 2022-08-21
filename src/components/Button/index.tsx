type Props = {
  name: string
  type: 'button' | 'submit'
  onClick?: () => void
}

const ButtonComponent = ({ name, type, onClick }: Props) => {
  return (
    <button type={type} onClick={onClick}>
      {name}
    </button>
  )
}

export default ButtonComponent
