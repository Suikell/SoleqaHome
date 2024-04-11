import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

// TODO - move to ui?
import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { useLoadOverlayData } from '~ui/Sensor/hooks/useLoadOverlayData'

import {
  TQSensorHistoricalValues,
  TQSensorHistoricalValuesVariables,
  useQSensorHistoricalValues,
} from '../../../graphql/generated/graphql'

type TData = Defined<TQSensorHistoricalValues['data']>
type TValues = Defined<TData['values']>

type TMinMax = {
  min: TData['minValue']
  max: TData['maxValue']
}

const REFETCH_TIME = 3 * 60 * 1000 // 3 minutes

export const useLoadHistoricalValues = () => {
  const { presentStatusToast } = useStatusToastCtx()

  const [values, setValues] = React.useState<TValues>([])
  const [minMax, setMinMax] = React.useState<TMinMax>({ min: null, max: null })

  const { sensor } = useSensorCtx()
  const { selectedPeriod } = useGraphValuesCtx()

  const variables = React.useMemo<
    TQSensorHistoricalValuesVariables | undefined
  >(() => {
    return {
      sensorId: sensor.id,
      dateRangeType: selectedPeriod,
    }
  }, [sensor.id, selectedPeriod])

  const {
    data: result,
    error,
    loading,
    refetch,
  } = useQSensorHistoricalValues({
    skip: !variables,
    variables,
  })

  const { overlayValues } = useLoadOverlayData()

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      refetch()
    }, REFETCH_TIME)
    return () => {
      clearTimeout(timeout)
    }
  }, [selectedPeriod, refetch, overlayValues])

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error.message)
    }
    if (!result || !result.data) {
      return
    }

    setValues(result.data.values || [])
    setMinMax({ min: result.data.minValue, max: result.data.maxValue })
  }, [error, presentStatusToast, result])

  return { minMax, values, overlayValues, loading }
}
