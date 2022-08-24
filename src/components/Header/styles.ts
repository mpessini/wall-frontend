import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 20vh;
`

export const ImageLogo = styled.img`
  align-self: flex-end;
  min-width: 95%;
  height: 95%;
`
export const SwitchContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  @media (max-width: 390px) {
    top: 3px;
    right: 3px;
  }
`
