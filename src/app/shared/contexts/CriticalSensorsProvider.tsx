import * as React from 'react'
import { useLoadCriticalSensors } from 'src/app/shared/hooks/useLoadCriticalSensors'

import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TReturnLoadSensors = Pick<
  ReturnType<typeof useLoadCriticalSensors>,
  'criticalSensors' | 'updateSensorCurrentValue'
>

type TContextValue = TReturnLoadSensors & {
  refetchCriticalSensors: () => void
}

const [
  Provider, //
  useCriticalSensorsCtx,
] = createContext<TContextValue>(`CriticalSensors`)

type TProps = RequiredChildren

export const CriticalSensorsProvider: React.FC<TProps> = ({ children }) => {
  const { criticalSensors, loading, refetch, updateSensorCurrentValue } =
    useLoadCriticalSensors()

  const value = React.useMemo(() => {
    return {
      criticalSensors,
      updateSensorCurrentValue,
      refetchCriticalSensors: refetch,
    }
  }, [criticalSensors, refetch, updateSensorCurrentValue])

  if (loading) {
    return <LoadingIndicator />
  }

  return <Provider value={value}>{children}</Provider>
}

export { useCriticalSensorsCtx }
