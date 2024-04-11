import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

// TODO - move to ui?
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
  const { presentStatusToast } = useStatusToastCtx()

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
    if (error) {
      presentStatusToast('error', error.message)
      return
    }
    setOverlayValues(result?.data?.values || [])
  }, [error, presentStatusToast, result])

  React.useEffect(() => {
    if (!isOverlayVisible) {
      setOverlayValues([])
    }
  }, [isOverlayVisible])

  return { overlayValues }
}
