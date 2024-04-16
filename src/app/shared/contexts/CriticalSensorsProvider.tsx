import * as React from 'react'
import { useCriticalSensorUpdaters } from 'src/app/shared/hooks/useCriticalSensorUpdaters'
import { useLoadCriticalSensors } from 'src/app/shared/hooks/useLoadCriticalSensors'

import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TReturnLoadSensors = Pick<
  ReturnType<typeof useLoadCriticalSensors>,
  'criticalSensors'
>

type TUpdaters = ReturnType<typeof useCriticalSensorUpdaters>

type TContextValue = TUpdaters & TReturnLoadSensors

const [
  Provider, //
  useCriticalSensorsCtx,
] = createContext<TContextValue>(`CriticalSensors`)

type TProps = RequiredChildren

export const CriticalSensorsProvider: React.FC<TProps> = ({ children }) => {
  const { criticalSensors, setCriticalSensors, loading } =
    useLoadCriticalSensors()

  const { updateSensorCurrentValue, updateCriticalSensor } =
    useCriticalSensorUpdaters({ setCriticalSensors })

  const value = React.useMemo(() => {
    return {
      criticalSensors,
      updateCriticalSensor,
      updateSensorCurrentValue,
    }
  }, [criticalSensors, updateCriticalSensor, updateSensorCurrentValue])

  if (loading) {
    return <LoadingIndicator />
  }

  return <Provider value={value}>{children}</Provider>
}

export { useCriticalSensorsCtx }
