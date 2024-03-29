import * as React from 'react'

import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'

import {
  TQSensorHistoricalValues,
  TQSensorHistoricalValuesVariables,
  useQSensorHistoricalValues,
} from '../../../graphql/generated/graphql'

type TValues = Defined<TQSensorHistoricalValues['values']>

export const useLoadHistoricalValues = () => {
  const [values, setValues] = React.useState<TValues>([])

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

  console.log('variables', variables)
  const { data, error, loading } = useQSensorHistoricalValues({
    skip: !variables,
    variables,
  })

  React.useEffect(() => {
    if (error || !data) {
      console.log('data', data)
      console.log('error', error)
      return
    }

    setValues(data.values || [])
  }, [data, error])

  return { values, loading }
}
