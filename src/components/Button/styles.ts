import styled from 'styled-components'

type ButtonProps = {
  width?: string
}

export const Button = styled.button<ButtonProps>`
  height: 50px;
  min-height: 5vh;
  min-width: 80px;
  width: ${({ width }) => (width ? width : '100%')};
  font-size: 20px;
  font-weight: bold;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.contrastDark};
  background-color: ${({ theme }) => theme.colors.tertiary};
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
