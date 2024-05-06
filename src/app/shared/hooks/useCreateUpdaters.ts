import * as React from 'react'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'
import { useLoadCategories } from 'src/app/shared/hooks/useLoadCategories'

import { TFActuatorBase, TFSensorBase } from '~graphql/generated/graphql'
import { formatSensorValue } from '~ui/Sensor/helpers/formatSensorValue'

type TProps = Pick<
  ReturnType<typeof useLoadCategories>,
  'setSensors' | 'setActuators'
>

export const useCreateUpdaters = ({ setSensors, setActuators }: TProps) => {
  const { sensors, actuators } = useCategoriesCtx()
  const sensorsRef = React.useRef(sensors)
  const actuatorsRef = React.useRef(actuators)
  sensorsRef.current = sensors
  actuatorsRef.current = actuators

  const updateSensorPart = React.useCallback(
    (sensorIndex: number, updatedSensor: TFSensorBase) => {
      setSensors((prevSensors) => [
        ...prevSensors.slice(0, sensorIndex),
        updatedSensor,
        ...prevSensors.slice(sensorIndex + 1),
      ])
    },
    [setSensors],
  )

  const updateActuator = React.useCallback(
    (actuatorIndex: number, updatedActuator: TFActuatorBase) => {
      setActuators((prevActuators) => [
        ...prevActuators.slice(0, actuatorIndex),
        updatedActuator,
        ...prevActuators.slice(actuatorIndex + 1),
      ])
    },
    [setActuators],
  )

  const useCreateSensorUpdater = <K extends keyof TFSensorBase>(
    property: K,
    onUpdateExtra?: (sensorId: ID, value: TFSensorBase[K]) => void,
  ) => {
    return React.useCallback(
      (sensorId: ID, value: TFSensorBase[K]) => {
        const sensorIndex = sensorsRef.current.findIndex(
          (s) => s.id === sensorId,
        )
        if (sensorIndex !== -1) {
          const currentSensor = sensorsRef.current[sensorIndex]

          if (currentSensor[property] === value) {
            return
          }

          if (property === 'currentValue') {
            const currentValue = formatSensorValue(currentSensor.currentValue)
            const formattedNewValue = formatSensorValue(value as number)

            if (currentValue === formattedNewValue) {
              return
            }
          }

          const updatedSensor = {
            ...sensorsRef.current[sensorIndex],
            [property]: value,
          }
          updateSensorPart(sensorIndex, updatedSensor)
          if (onUpdateExtra) {
            onUpdateExtra(sensorId, value)
          }
        }
      },
      [onUpdateExtra, property],
    )
  }

  const useCreateActuatorUpdater = <K extends keyof TFActuatorBase>(
    property: K,
    onUpdateExtra?: (actuatorId: ID, value: TFActuatorBase[K]) => void,
  ) => {
    return React.useCallback(
      (actuatorId: ID, value: TFActuatorBase[K]) => {
        const actuatorIndex = actuatorsRef.current.findIndex(
          (a) => a.id === actuatorId,
        )
        if (actuatorIndex !== -1) {
          const updatedActuator = {
            ...actuatorsRef.current[actuatorIndex],
            [property]: value,
          }
          updateActuator(actuatorIndex, updatedActuator)
          if (onUpdateExtra) {
            onUpdateExtra(actuatorId, value)
          }
        }
      },
      [onUpdateExtra, property],
    )
  }

  return {
    useCreateSensorUpdater,
    useCreateActuatorUpdater,
  }
}
