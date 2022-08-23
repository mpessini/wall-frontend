import styled from 'styled-components'

export const Input = styled.input`
  height: 50px;
  min-height: 5vh;
  width: 100%;
  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
  font-size: 20px;
  letter-spacing: 1px;
  padding: 12px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.contrastDark};
  ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
  :focus {
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`
