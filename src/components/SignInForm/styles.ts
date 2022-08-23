import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  padding: 20px;
  margin-top: 5vh;
  width: 360px;
  min-width: 20vw;
  max-width: 95vw;
  text-align: center;
`
