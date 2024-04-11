import * as React from 'react'
import { useLoadCriticalSensors } from 'src/app/shared/hooks/useLoadCriticalSensors'

import { TFSensorBase } from '~graphql/generated/graphql'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TContextValue = {
  criticalSensors: RoA<TFSensorBase>
  refetchCriticalSensors: () => void
}

const [
  Provider, //
  useCriticalSensorsCtx,
] = createContext<TContextValue>(`CriticalSensors`)

type TProps = RequiredChildren

export const CriticalSensorsProvider: React.FC<TProps> = ({ children }) => {
  const { criticalSensors, loading, refetch } = useLoadCriticalSensors()

  const value = React.useMemo(() => {
    return {
      criticalSensors,
      refetchCriticalSensors: refetch,
    }
  }, [criticalSensors, refetch])

  if (loading) {
    return <LoadingIndicator />
  }

  return <Provider value={value}>{children}</Provider>
}

export { useCriticalSensorsCtx }
