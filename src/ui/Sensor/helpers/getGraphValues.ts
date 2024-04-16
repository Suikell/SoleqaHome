import { format } from 'date-fns'

import { TDateRangeTypeEnum } from '~graphql/generated/graphql'
import { formatSensorValue } from '~ui/Sensor/helpers/formatSensorValue'
import { useLoadHistoricalValues } from '~ui/Sensor/hooks/useLoadHistoricalValues'
import { isDefined } from '~utils/helpers/isDefined'

type TReturnValues = ReturnType<typeof useLoadHistoricalValues>
export type TOverlayValues = TReturnValues['overlayValues']
export type TValues = TReturnValues['values']
export type TMinMax = TReturnValues['minMax']

export const getDateValues = (
  values: TValues | TOverlayValues,
  period: TDateRangeTypeEnum,
) => {
  return values
    .map((value) => {
      if (!value) {
        return null
      }
      return getTimeFormat(value.startDate, period)
    })
    .filter(isDefined)
}

const getTimeFormat = (date: Date, period: TDateRangeTypeEnum) => {
  if (period === 'DAY' || period === 'HOUR') {
    return format(date, 'HH:mm')
  }
  return format(date, 'dd.MM')
}

export const getMinMaxValues = (values: TValues) => {
  const result = values
    .map((item, index) => {
      if (!item) return null
      return [index, item.min, item.max]
    })
    .filter(isDefined)
  return result
}

export const getAverage = (values: TValues | TOverlayValues) => {
  const res = values
    .map((item) => {
      if (!item) return null
      return item.average
    })
    .filter(isDefined)
  return res
}

/**
 * Echarts do not support typescript fully, so we need to do some magic typescript casting.
 * Returns the formatted value (min/max/average) for the tooltip.
 *
 * The value is always a number, but the function is typed to accept string, number and Date because of the echarts tooltip params.
 */
export const getFormattedToolTipValue = (value: string | number | Date) => {
  return formatSensorValue(parseFloat(value.toString()))
}
