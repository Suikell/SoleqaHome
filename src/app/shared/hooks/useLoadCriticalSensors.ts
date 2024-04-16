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

 

  return {
    setCriticalSensors,
    criticalSensors,
    loading,
    refetch,
  }
}
