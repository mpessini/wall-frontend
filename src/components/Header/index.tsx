import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import moonIcon from '../../assets/moon.png'
import sunIcon from '../../assets/sun.png'
import darkLogo from '../../assets/wallDarkLogo.svg'
import lightLogo from '../../assets/wallLightLogo.svg'
import { HeaderContainer, ImageLogo, SwitchContainer } from './styles'

type Props = {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <ImageLogo
        src={title === 'light' ? lightLogo : darkLogo}
        alt="Wall Logo"
        width={200}
      />
      <SwitchContainer>
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
                src={moonIcon}
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
                src={sunIcon}
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
      </SwitchContainer>
    </HeaderContainer>
  )
}

export default Header
