import * as React from 'react'

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

export const useLoadHistoricalValues = () => {
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
  } = useQSensorHistoricalValues({
    skip: !variables,
    variables,
  })

  const { overlayValues } = useLoadOverlayData()

  React.useEffect(() => {
    if (error || !result || !result.data) {
      return
    }

    setValues(result.data.values || [])
    setMinMax({ min: result.data.minValue, max: result.data.maxValue })
  }, [error, result])

  return { minMax, values, overlayValues, loading }
}
