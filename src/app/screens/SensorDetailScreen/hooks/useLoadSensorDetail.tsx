import React from 'react'
import { useSensorValueCtx } from 'src/app/shared/components/SensorValueProvider'

import { TQSensorDetail, useQSensorDetail } from '~graphql/generated/graphql'

type TSensor = TQSensorDetail['sensor']

// TODO load in provider
// add mutations for editing sensor and sensor values (optimal, critical, ...)
export const useLoadSensorDetail = (sensorId: ID) => {
  const [sensor, setSensor] = React.useState<TSensor>(null)
  const updatedValue = useSensorValueCtx()
  const { data, error, loading } = useQSensorDetail({
    variables: { sensorId },
  })

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }
    setSensor(data.sensor)
  }, [data, error])

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
