import styled from 'styled-components'

export const Input = styled.input`
  height: 50px;
  min-height: 5vh;
  border-radius: 8px;
  border: 3px solid ${(props) => props.theme.colors.tertiary};
  font-size: 20px;
  letter-spacing: 1px;
  padding: 12px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.contrastDark};
  ::placeholder {
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
  }
  :focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.colors.primary};
  }
`
