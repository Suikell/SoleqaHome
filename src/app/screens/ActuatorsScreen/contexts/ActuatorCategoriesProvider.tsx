import * as React from 'react'

import { useLoadActuators } from '~screens/ActuatorsScreen/hooks/useLoadActuators'
import { createContext } from '~utils/context/createContext'

type TProps = RequiredChildren

type TContext = ReturnType<typeof useLoadActuators>

const [
  Provider, //
  useActuatorCategoriesCtx,
] = createContext<TContext>(`ActuatorCategories`)

export const ActuatorCategoriesProvider: React.FC<TProps> = ({ children }) => {
  const value = useLoadActuators()
  return <Provider value={value}>{children}</Provider>
}

export { useActuatorCategoriesCtx }
