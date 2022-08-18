import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import light from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
