import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  TActuatorNodeSubscriptionType,
  TSensorNodeSubscriptionType,
  useSValues,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

// Because for some amazing reason subscriptions on BE must be defined as unions..
type TSensorSubscription = Pick<
  TSensorNodeSubscriptionType,
  'id' | 'currentValue' | 'isCritical'
>

type TSensorContext = {
  sensorId: ID
  newValue: TSensorSubscription['currentValue']
}
type TActuator = TActuatorNodeSubscriptionType
type TActuatorSubscription = Pick<TActuator, 'id' | 'currentState'>

type TActuatorContext = {
  actuatorId: TActuatorSubscription['id']
  newValue: TActuatorSubscription['currentState']
}

type TProps = RequiredChildren

const [SensorValueProvider, useSensorValueCtx] =
  createContext<Nullable<TSensorContext>>(`SensorValue`)

const [ActuatorValueProvider, useActuatorValueCtx] =
  createContext<Nullable<TActuatorContext>>(`ActuatorValue`)

const ValueSubscriptionProvider: React.FC<TProps> = ({ children }) => {
  const { presentStatusToast } = useStatusToastCtx()

  const result = useSValues()
  const [sensorValue, setSensorValue] =
    React.useState<Nullable<TSensorContext>>(null)
  const [actuatorValue, setActuatorValue] =
    React.useState<Nullable<TActuatorContext>>(null)

  const {
    updateSensorCurrentValue,
    updateActuatorCurrentState,
    updateSensorFavoriteValue,
  } = useCategoriesUpdatersCtx()

  React.useEffect(() => {
    if (result.error) {
      presentStatusToast('error', result.error.message)
      return
    }

    if (result.data && result.data.change) {
      const type = result.data.change.type

      if (type === `ACTUATOR_STATE_CHANGED`) {
        const actuator = result.data.change.data as TActuatorSubscription
        const { id, currentState } = actuator

        updateActuatorCurrentState(id, currentState)
        setActuatorValue({
          actuatorId: id,
          newValue: currentState,
        })
        return
      }

      const sensor = result.data.change.data as TSensorSubscription

      if (type === `SENSOR_IS_CRITICAL_CHANGED`) {
        // TODO - what is this?
        updateSensorFavoriteValue(sensor.id, sensor.isCritical)
        return
      }

      updateSensorCurrentValue(sensor.id, sensor.currentValue)

      setSensorValue({
        sensorId: sensor.id,
        newValue: sensor.currentValue,
      })
    }
  }, [
    result,
    presentStatusToast,
    updateActuatorCurrentState,
    updateSensorCurrentValue,
    updateSensorFavoriteValue,
  ])

  return (
    <SensorValueProvider value={sensorValue}>
      <ActuatorValueProvider value={actuatorValue}>
        {children}
      </ActuatorValueProvider>
    </SensorValueProvider>
  )
}

export { ValueSubscriptionProvider, useSensorValueCtx, useActuatorValueCtx }
