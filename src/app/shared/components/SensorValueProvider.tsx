import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TFSensorBase, useSSensorValues } from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TProps = RequiredChildren

type TContext = {
  sensorId: ID
  newValue: Defined<TFSensorBase['currentValue']>
}

const [Provider, useSensorValueCtx] =
  createContext<Nullable<TContext>>(`SensorValue`)

const SensorValueProvider: React.FC<TProps> = ({ children }) => {
  const result = useSSensorValues()
  const [value, setValue] = React.useState<Nullable<TContext>>(null)
  const { updateSensorCurrentValue } = useCategoriesUpdatersCtx()

  React.useEffect(() => {
    if (result.error) {
      return
    }

    if (result.data) {
      const sensorValue = result.data.sensorValueLogged
      if (sensorValue?.sensor) {
        updateSensorCurrentValue(sensorValue.sensor.id, sensorValue.value)
        setValue({
          sensorId: sensorValue.sensor.id,
          newValue: sensorValue.value,
        })
      }
    }
  }, [result.data, result.error, updateSensorCurrentValue])

  return <Provider value={value}>{children}</Provider>
}

export { SensorValueProvider, useSensorValueCtx }
