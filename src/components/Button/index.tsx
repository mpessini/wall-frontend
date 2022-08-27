import { Button } from './styles'
import CircularProgress from '@mui/material/CircularProgress'

type TProps = {
  name: string
  type: 'button' | 'submit'
  dataTestId?: string
  isLoading?: boolean
  onClick?: () => void
  width?: string
}

const ButtonComponent = ({
  name,
  type,
  dataTestId,
  isLoading,
  onClick,
  width
}: TProps) => {
  return (
    <Button
      type={type}
      data-testid={dataTestId}
      onClick={onClick}
      width={width}
      aria-label={name}
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress color="inherit" size={30} /> : name}
    </Button>
  )
}

export default ButtonComponent
