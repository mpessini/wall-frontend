import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

type Props = {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <header>
      <img src={`/assets/wall-${title}-logo.svg`} alt="Wall Logo" width={200} />
      <Switch
        onChange={() => toggleTheme()}
        checked={title === 'dark'}
        checkedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <img
              src="/assets/moon.png"
              style={{
                maxHeight: '100%',
                marginBottom: '1px',
                marginLeft: '1px'
              }}
            />
          </div>
        }
        uncheckedIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <img
              src="/assets/sun.png"
              style={{
                maxHeight: '100%',
                marginBottom: '2px',
                marginRight: '3px'
              }}
            />
          </div>
        }
        height={30}
        width={70}
        handleDiameter={26}
        offColor={colors.secondary}
        onColor={colors.primary}
      />
    </header>
  )
}

export default Header
