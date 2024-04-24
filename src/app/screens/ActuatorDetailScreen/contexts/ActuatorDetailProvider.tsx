import * as React from 'react'

import { useLoadActuatorDetail } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TActuator = ReturnType<typeof useLoadActuatorDetail>['actuator']

type TContext = {
  actuator: Defined<TActuator>
}

const [Provider, useActuatorDetailCtx] =
  createContext<TContext>(`ActuatorDetail`)

type TProps = RequiredChildren & {
  actuatorId: ID
}

/**
 * Context provider getting the actuator detail.
 */
const ActuatorDetailProvider: React.FC<TProps> = ({ actuatorId, children }) => {
  const { actuator, loading } = useLoadActuatorDetail(actuatorId)

  if (loading || !actuator) {
    return <LoadingIndicator />
  }
  return <Provider value={{ actuator }}>{children}</Provider>
}

export { ActuatorDetailProvider, useActuatorDetailCtx }
