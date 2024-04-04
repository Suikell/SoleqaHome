import * as React from 'react'

import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'

import {
  TQSensorHistoricalValuesByDate,
  TQSensorHistoricalValuesVariables,
  useQSensorHistoricalValuesByDate,
} from '../../../graphql/generated/graphql'

type TData = Defined<TQSensorHistoricalValuesByDate['data']>
type TValues = Defined<TData['values']>

export const useLoadOverlayData = () => {
  const [overlayValues, setOverlayValues] = React.useState<TValues>([])

  const { sensor } = useSensorCtx()
  const { selectedPeriod, isOverlayVisible, overlayDateTime } =
    useGraphValuesCtx()

  const variables = React.useMemo<
    TQSensorHistoricalValuesVariables | undefined
  >(() => {
    if (!isOverlayVisible) return undefined

    return {
      sensorId: sensor.id,
      dateRangeType: selectedPeriod,
      endDatetime: overlayDateTime,
    }
  }, [sensor.id, selectedPeriod, isOverlayVisible, overlayDateTime])

  const { data: result, error } = useQSensorHistoricalValuesByDate({
    skip: !variables,
    variables,
  })

  React.useEffect(() => {
    if (error || !result || !result.data) {
      return
    }
    setOverlayValues(result.data.values || [])
  }, [error, result])

  React.useEffect(() => {
    if (!isOverlayVisible) {
      setOverlayValues([])
    }
  }, [isOverlayVisible])

  return { overlayValues }
}
