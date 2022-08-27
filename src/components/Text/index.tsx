import { Text } from './styles'

type TProps = {
  text: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
}

const TextComponent = ({ text, fontSize, fontFamily, fontWeight }: TProps) => {
  return (
    <Text fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight}>
      {text}
    </Text>
  )
}

export default TextComponent
