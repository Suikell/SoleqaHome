import React from 'react'
import { useActuatorValueCtx } from 'src/app/shared/components/ValueSubscriptionProvider'

import {
  TQActuatorDetail,
  useQActuatorDetail,
} from '~graphql/generated/graphql'

export type TActuator = TQActuatorDetail['actuator']

// todo error handling
// add mutations for editing sensor and sensor values (optimal, critical, ...)
export const useLoadActuatorDetail = (actuatorId: ID) => {
  const updatedValue = useActuatorValueCtx()

  const [actuator, setActuator] = React.useState<TActuator>(null)

  const { data, error, loading } = useQActuatorDetail({
    variables: { actuatorId },
  })

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }
    setActuator(data.actuator)
  }, [data, error])

  React.useEffect(() => {
    if (updatedValue) {
      setActuator((prevActuator) => {
        if (prevActuator && updatedValue.actuatorId === prevActuator.id) {
          return {
            ...prevActuator,
            currentState: updatedValue.newValue,
          }
        }
        return prevActuator
      })
    }
  }, [updatedValue])

  return {
    actuator,
    loading,
  }
}
