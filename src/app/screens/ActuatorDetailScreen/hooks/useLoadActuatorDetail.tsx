import React from 'react'
import { useActuatorValueCtx } from 'src/app/shared/components/ValueSubscriptionProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  TQActuatorDetail,
  useQActuatorDetail,
} from '~graphql/generated/graphql'

export type TActuator = TQActuatorDetail['actuator']

export const useLoadActuatorDetail = (actuatorId: ID) => {
  const { presentStatusToast } = useStatusToastCtx()

  const updatedValue = useActuatorValueCtx()

  const [actuator, setActuator] = React.useState<TActuator>(null)

  const { data, error, loading } = useQActuatorDetail({
    variables: { actuatorId },
  })

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error?.message)
      return
    }
    if (!data) return
    setActuator(data.actuator)
  }, [data, error, presentStatusToast])

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
