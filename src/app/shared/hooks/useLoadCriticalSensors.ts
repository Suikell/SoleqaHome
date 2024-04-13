import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { TFSensorBase, useQCriticalSensors } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useLoadCriticalSensors = () => {
  const { presentStatusToast } = useStatusToastCtx()

  const { data, loading, error, refetch } = useQCriticalSensors()

  const [criticalSensors, setCriticalSensors] = React.useState<
    RoA<TFSensorBase>
  >([])

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error?.message)
      return
    }
    if (!data || !data.categories) return

    const sensors = data.categories
      .flatMap((category) => {
        if (!category) return null
        if (!category.sensors) return null
        if (category.sensors.length === 0) return null
        return category.sensors
      })
      .filter(isDefined)

    setCriticalSensors(sensors)
  }, [data, error, presentStatusToast])

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
    criticalSensors,
    loading,
    refetch,
    updateSensorCurrentValue,
  }
}
