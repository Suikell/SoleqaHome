import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import {
  TSensorNodeSubscriptionType,
  useSSensorValue,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

// Because for some amazing reason subscriptions on BE must be defined as unions..
type TSensorSubscription = Pick<
  TSensorNodeSubscriptionType,
  'id' | 'currentValue' | 'isCritical'
>

type TProps = RequiredChildren

type TContext = {
  sensorId: ID
  newValue: TSensorSubscription['currentValue']
}

const [Provider, useSensorValueCtx] =
  createContext<Nullable<TContext>>(`SensorValue`)

const SensorValueProvider: React.FC<TProps> = ({ children }) => {
  const result = useSSensorValue()
  const [value, setValue] = React.useState<Nullable<TContext>>(null)
  const { updateSensorCurrentValue, updateSensorFavoriteValue } =
    useCategoriesUpdatersCtx()

  React.useEffect(() => {
    if (result.error) {
      return
    }

    if (result.data && result.data.change) {
      const type = result.data.change.type
      const sensor = result.data.change.data as TSensorSubscription

      if (type === `SENSOR_IS_CRITICAL_CHANGED`) {
        updateSensorFavoriteValue(sensor.id, sensor.isCritical)
        return
      }

      updateSensorCurrentValue(sensor.id, sensor.currentValue)

      setValue({
        sensorId: sensor.id,
        newValue: sensor.currentValue,
      })
    }
  }, [
    result,
    result.data,
    result.error,
    updateSensorCurrentValue,
    updateSensorFavoriteValue,
  ])

  return <Provider value={value}>{children}</Provider>
}

export { SensorValueProvider, useSensorValueCtx }
