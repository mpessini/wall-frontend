import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import Header from './components/Header'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Wall from './pages/Wall'

function App() {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wall" element={<Wall />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
