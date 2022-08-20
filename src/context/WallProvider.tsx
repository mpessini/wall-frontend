import WallContext from './WallContext'
import { Props } from './types'

function Provider({ children }: Props) {
  return <WallContext.Provider value={{}}>{children}</WallContext.Provider>
}

export default Provider
