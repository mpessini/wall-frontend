import { Route, Routes } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import WallProvider from './context/WallProvider'
import GlobalStyles from './styles/GlobalStyles'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import Header from './components/Header'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Wall from './pages/Wall'
import usePersistedState from './utils/usePersistedState'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <WallProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wall" element={<Wall />} />
        </Routes>
      </WallProvider>
    </ThemeProvider>
  )
}

export default App
