import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-size: 16px;
    font-family: sans-serif;
  }
`
