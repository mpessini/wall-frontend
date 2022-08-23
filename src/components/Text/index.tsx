import { Text } from './styles'

type Props = {
  text: string
}

const TextComponent = ({ text }: Props) => {
  return <Text>{text}</Text>
}

export default TextComponent
