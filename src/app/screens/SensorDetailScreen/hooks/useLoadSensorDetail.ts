import React from 'react'
import { useSensorValueCtx } from 'src/app/shared/components/ValueSubscriptionProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { TQSensorDetail, useQSensorDetail } from '~graphql/generated/graphql'

type TSensor = TQSensorDetail['sensor']

// add mutations for editing sensor and sensor values (optimal, critical, ...)
export const useLoadSensorDetail = (sensorId: ID) => {
  const { presentStatusToast } = useStatusToastCtx()
  const updatedValue = useSensorValueCtx()

  const [sensor, setSensor] = React.useState<TSensor>(null)
  const { data, error, loading } = useQSensorDetail({
    variables: { sensorId },
  })

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error?.message)
      return
    }
    setSensor(data?.sensor || null)
  }, [data, error, presentStatusToast])

  React.useEffect(() => {
    if (updatedValue) {
      setSensor((prevSensor) => {
        if (prevSensor && updatedValue.sensorId === prevSensor.id) {
          return {
            ...prevSensor,
            currentValue: updatedValue.newValue,
          }
        }
        return prevSensor
      })
    }
  }, [updatedValue])

  return { sensor, loading }
}
