import { Button } from './styles'

type Props = {
  name: string
  type: 'button' | 'submit'
  onClick?: () => void
  width?: string
}

const ButtonComponent = ({ name, type, onClick, width }: Props) => {
  return (
    <Button type={type} onClick={onClick} width={width}>
      {name}
    </Button>
  )
}

export default ButtonComponent
