import styled from 'styled-components'

type TTextProps = {
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
}

export const Text = styled.p<TTextProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '30px')};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : 'sans-serif')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  word-break: break-all;
  @media (max-width: 390px) {
    font-size: 23px;
  }
`
