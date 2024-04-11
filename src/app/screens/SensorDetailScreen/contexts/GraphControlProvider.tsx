import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

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
  overlayDateTime: Date
  isOverlayVisible: boolean
}

type TContextUpdaters = {
  setSelectedPeriod: (period: TDateRangeTypeEnum) => void
  setCriticalOver: (value?: number) => void
  setCriticalUnder: (value?: number) => void
  setOverlayDateTime: (date: Date) => void
  setIsOverlayVisible: (visible: boolean) => void
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
  const { presentStatusToast } = useStatusToastCtx()

  const [overlayDateTime, setOverlayDateTimeValue] = React.useState(new Date())
  const [isOverlayVisible, setIsOverlayVisibleValue] = React.useState(false)

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
    if (error) {
      presentStatusToast('error', error.message)
      return
    }

    if (!data || !data.sensor) {
      return
    }
    const sensor = data.sensor
    setCriticalOverValue(sensor.criticalOver)
    setCriticalUnderValue(sensor.criticalUnder)
  }, [
    data,
    error,
    presentStatusToast,
    setCriticalOverValue,
    setCriticalUnderValue,
  ])

  const { setCriticalOver, setCriticalUnder } = useSensorUpdaters(sensorId)

  const setSelectedPeriod = React.useCallback((period: TDateRangeTypeEnum) => {
    setSelectedPeriodValue(period)
  }, [])

  const setOverlayDateTime = React.useCallback(
    (date: Date) => {
      setOverlayDateTimeValue(date)
    },
    [setOverlayDateTimeValue],
  )

  const setIsOverlayVisible = React.useCallback((visible: boolean) => {
    setIsOverlayVisibleValue(visible)
  }, [])

  const updaters = React.useMemo(() => {
    return {
      setCriticalOver,
      setCriticalUnder,
      setSelectedPeriod,
      setOverlayDateTime,
      setIsOverlayVisible,
    }
  }, [
    setCriticalOver,
    setCriticalUnder,
    setIsOverlayVisible,
    setOverlayDateTime,
    setSelectedPeriod,
  ])

  return (
    <Provider
      value={{
        selectedPeriod,
        criticalOver,
        criticalUnder,
        overlayDateTime,
        isOverlayVisible,
        loading,
      }}
    >
      <UpdatersProvider value={updaters}>{children}</UpdatersProvider>
    </Provider>
  )
}

export { useGraphValuesCtx, useGraphControlCtx }
