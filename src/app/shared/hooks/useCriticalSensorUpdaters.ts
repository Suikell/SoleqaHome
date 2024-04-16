import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'
import { useLoadCriticalSensors } from 'src/app/shared/hooks/useLoadCriticalSensors'

import {
  TFSensorBase,
  useQSensorBaseLazyQuery,
} from '~graphql/generated/graphql'

type TProps = {
  setCriticalSensors: ReturnType<
    typeof useLoadCriticalSensors
  >['setCriticalSensors']
}

export const useCriticalSensorUpdaters = ({ setCriticalSensors }: TProps) => {
  const { presentStatusToast } = useStatusToastCtx()
  const [qSensorBase] = useQSensorBaseLazyQuery()

  const updateCriticalSensor = React.useCallback(
    (sensorId: ID, isCritical: boolean) => {
      if (!isCritical) {
        // remove sensor from critical sensors
        setCriticalSensors((prevSensors) => {
          const sensorIndex = prevSensors.findIndex((s) => s.id === sensorId)
          if (sensorIndex === -1) return prevSensors
          return [
            ...prevSensors.slice(0, sensorIndex),
            ...prevSensors.slice(sensorIndex + 1),
          ]
        })
        return
      }

      // fetch base info about the sensor and add it to critical sensors
      qSensorBase({
        variables: {
          sensorId,
        },
      })
        .then(({ data }) => {
          const newSensor = data?.sensor
          if (!newSensor || !newSensor.isCritical) return

          setCriticalSensors((prevSensors) => {
            return [...prevSensors, newSensor]
          })
        })
        .catch((error) => {
          presentStatusToast(
            'error',
            `Failed to fetch critical sensor ${error.message}`,
          )
        })
    },
    [],
  )

  const updateSensorCurrentValue = React.useCallback(
    (sensorId: ID, value: TFSensorBase['currentValue']) => {
      if (!value) return
      // update sensor value
      setCriticalSensors((prevSensors) => {
        const sensorIndex = prevSensors.findIndex((s) => s.id === sensorId)
        if (sensorIndex === -1) return prevSensors

        const updatedSensor = {
          ...prevSensors[sensorIndex],
          currentValue: value,
        }

        return [
          ...prevSensors.slice(0, sensorIndex),
          updatedSensor,
          ...prevSensors.slice(sensorIndex + 1),
        ]
      })
    },
    [],
  )

  return {
    updateCriticalSensor,
    updateSensorCurrentValue,
  }
}
