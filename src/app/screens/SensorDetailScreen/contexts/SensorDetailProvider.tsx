import * as React from 'react'

import { useLoadSensorDetail } from '~screens/SensorDetailScreen/hooks/useLoadSensorDetail'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TSensor = ReturnType<typeof useLoadSensorDetail>['sensor']

type TContext = {
  sensor: Defined<TSensor>
}

const [Provider, useSensorCtx] = createContext<TContext>(`SensorDetail`)

type TProps = RequiredChildren & {
  sensorId: ID
}

/**
 * Context provider getting the sensor detail.
 */
export const SensorDetailProvider: React.FC<TProps> = ({
  sensorId,
  children,
}) => {
  const { sensor, loading } = useLoadSensorDetail(sensorId)

  if (loading || !sensor) {
    return <LoadingIndicator />
  }
  return <Provider value={{ sensor }}>{children}</Provider>
}

export { useSensorCtx }
