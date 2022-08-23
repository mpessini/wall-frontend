import { Text } from './styles'

type Props = {
  text: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
}

const TextComponent = ({ text, fontSize, fontFamily, fontWeight }: Props) => {
  return (
    <Text fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight}>
      {text}
    </Text>
  )
}

export default TextComponent
