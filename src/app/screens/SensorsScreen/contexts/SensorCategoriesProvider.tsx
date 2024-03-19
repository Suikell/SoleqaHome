import * as React from 'react'

import { useLoadSensors } from '~ui/Sensor/hooks/useLoadSensors'
import { createContext } from '~utils/context/createContext'

type TProps = RequiredChildren

type TContext = ReturnType<typeof useLoadSensors>

const [
  Provider, //
  useSensorCategoriesCtx,
] = createContext<TContext>(`SensorCategories`)

export const SensorCategoriesProvider: React.FC<TProps> = ({ children }) => {
  const value = useLoadSensors()
  return <Provider value={value}>{children}</Provider>
}

export { useSensorCategoriesCtx }
