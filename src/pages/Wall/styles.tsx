import styled from 'styled-components'

export const WallContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50vw;
  max-width: 95vw;
  @media (max-width: 1400px) {
    min-width: 70vw;
  }
`
