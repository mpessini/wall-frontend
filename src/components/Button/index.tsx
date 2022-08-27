import { Button } from './styles'

type Props = {
  name: string
  type: 'button' | 'submit'
  dataTestId?: string
  onClick?: () => void
  width?: string
}

const ButtonComponent = ({ name, type, dataTestId, onClick, width }: Props) => {
  return (
    <Button
      type={type}
      data-testid={dataTestId}
      onClick={onClick}
      width={width}
      aria-label={name}
    >
      {name}
    </Button>
  )
}

export default ButtonComponent
