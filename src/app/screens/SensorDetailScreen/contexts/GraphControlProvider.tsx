import * as React from 'react'

import {
  TDateRangeTypeEnum,
  TQSensorGraphValues,
  useQSensorGraphValues,
} from '~graphql/generated/graphql'
import { useSensorUpdaters } from '~screens/SensorDetailScreen/hooks/useSensorUpdaters'
import { createContext } from '~utils/context/createContext'

export type TCritical = Pick<
  Defined<TQSensorGraphValues['sensor']>,
  'criticalOver' | 'criticalUnder'
>
type TContext = TCritical & {
  loading: boolean
  selectedPeriod: TDateRangeTypeEnum
}

type TContextUpdaters = {
  setSelectedPeriod: (period: TDateRangeTypeEnum) => void
  setCriticalOver: (value?: number) => void
  setCriticalUnder: (value?: number) => void
}

const [Provider, useGraphValuesCtx] = createContext<TContext>(`GraphValues`)
const [UpdatersProvider, useGraphControlCtx] =
  createContext<TContextUpdaters>(`GraphControl`)

type TProps = RequiredChildren & {
  sensorId: ID
}

/**
 * Provides the context for the graph values and the control of the graph.
 */
export const GraphControlProvider: React.FC<TProps> = ({
  sensorId,
  children,
}) => {
  const [selectedPeriod, setSelectedPeriodValue] =
    React.useState<TDateRangeTypeEnum>(`HOUR`)

  const [criticalOver, setCriticalOverValue] =
    React.useState<Nullable<number>>(null)
  const [criticalUnder, setCriticalUnderValue] =
    React.useState<Nullable<number>>(null)

  const { data, error, loading } = useQSensorGraphValues({
    variables: { sensorId },
  })

  React.useEffect(() => {
    if (error || !data || !data.sensor) {
      return
    }
    const sensor = data.sensor
    setCriticalOverValue(sensor.criticalOver)
    setCriticalUnderValue(sensor.criticalUnder)
  }, [data, error, setCriticalOverValue, setCriticalUnderValue])

  const { setCriticalOver, setCriticalUnder } = useSensorUpdaters(sensorId)

  const setSelectedPeriod = React.useCallback((period: TDateRangeTypeEnum) => {
    setSelectedPeriodValue(period)
  }, [])

  const updaters = React.useMemo(() => {
    return { setCriticalOver, setCriticalUnder, setSelectedPeriod }
  }, [setCriticalOver, setCriticalUnder, setSelectedPeriod])

  return (
    <Provider value={{ selectedPeriod, criticalOver, criticalUnder, loading }}>
      <UpdatersProvider value={updaters}>{children}</UpdatersProvider>
    </Provider>
  )
}

export { useGraphValuesCtx, useGraphControlCtx }
