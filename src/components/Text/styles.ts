import styled from 'styled-components'

type TextProps = {
  'font-size'?: string
  'font-family'?: string
}

export const Text = styled.p<TextProps>`
  font-size: 30px;
  font-family: cursive;
  @media (max-width: 390px) {
    font-size: 23px;
  }
`
