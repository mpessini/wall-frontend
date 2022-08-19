type Props = {
  name: string
  type: 'button' | 'submit'
  onclick?: () => void
}

const ButtonComponent = ({ name, type, onclick }: Props) => {
  return (
    <button type={type} onClick={onclick}>
      {name}
    </button>
  )
}

export default ButtonComponent
