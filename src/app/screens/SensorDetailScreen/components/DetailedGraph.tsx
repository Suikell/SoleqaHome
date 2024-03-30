import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import { useAppTheme } from 'App'
import { format } from 'date-fns'
import { CustomChart, LineChart } from 'echarts/charts'
import {
  DataZoomComponent,
  GridComponent,
  MarkLineComponent,
  TooltipComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { EChartsType } from 'echarts/core'
import {
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  CustomSeriesRenderItemReturn,
  TopLevelFormatterParams,
} from 'echarts/types/dist/shared'
import React, { useRef } from 'react'
import { Dimensions } from 'react-native'

import { TDateRangeTypeEnum } from '~graphql/generated/graphql'
import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { formatSensorValue } from '~ui/Sensor/helpers/formatSensorValue'
import { useLoadHistoricalValues } from '~ui/Sensor/hooks/useLoadHistoricalValues'
import { isDefined } from '~utils/helpers/isDefined'

type TReturnValues = ReturnType<typeof useLoadHistoricalValues>
type TValues = TReturnValues['values']
type TMinMax = TReturnValues['minMax']

type TProps = NoChildren & {
  values: TValues
  min: TMinMax['min']
  max: TMinMax['max']
}

echarts.use([
  SVGRenderer,
  TooltipComponent,
  LineChart,
  MarkLineComponent,
  GridComponent,
  DataZoomComponent,
  CustomChart,
])

export const DetailedGraph: React.FC<TProps> = ({ min, max, values }) => {
  const { sensor } = useSensorCtx()
  const { criticalUnder, criticalOver, selectedPeriod } = useGraphValuesCtx()
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const skiaRef = useRef<HTMLElement>(null)
  const theme = useAppTheme()

  const criticalValues = React.useMemo(() => {
    const lines = []
    lines.push({
      name: 'min',
      type: 'min',
    })
    if (criticalOver) {
      lines.push({
        name: 'critical over',
        yAxis: criticalOver,
        label: {
          padding: [2, 4, 2, 0],

          position: 'insideEndTop',
          color: theme.custom.criticalOver,
        },
        lineStyle: { color: theme.custom.criticalOver },
      })
    }
    if (criticalUnder) {
      lines.push({
        label: {
          padding: [2, 4, 2, 0],

          position: 'insideEndTop',
          color: theme.custom.criticalUnder,
        },
        name: 'critical under',
        yAxis: criticalUnder,
        lineStyle: { color: theme.custom.criticalUnder },
      })
    }
    if (min) {
      lines.push({
        name: 'min',
        yAxis: min,
        label: {
          padding: [2, 0, 2, 4],

          position: 'insideStartTop',
        },
        lineStyle: {
          type: 'solid',
          color: theme.colors.outline,
        },
      })
    }
    if (max) {
      lines.push({
        name: 'max',
        yAxis: max,

        label: {
          padding: [2, 0, 2, 4],

          position: 'insideStartTop',
        },
        lineStyle: {
          type: 'solid',
          color: theme.colors.outline,
        },
      })
    }
    return lines
  }, [criticalOver, criticalUnder, max, min, theme])

  React.useEffect(() => {
    const option = {
      // toolbox to reset data
      tooltip: {
        backgroundColor: theme.colors.surfaceVariant,
        textStyle: {
          color: theme.colors.onSurface,
        },
        formatter: (params: TopLevelFormatterParams) => {
          if (!Array.isArray(params)) return
          if (params.length < 2) return
          const minMaxObject = params[0]
          const averageObject = params[1]

          if (!Array.isArray(minMaxObject.data)) return

          const dateTime = minMaxObject.name
          const min = minMaxObject.data[1]
          const max = minMaxObject.data[2]
          const average = averageObject.value

          const formattedMin = getFormattedToolTipValue(min)
          const formattedMax = getFormattedToolTipValue(max)
          // .value can be even more types than the value from data -_-
          const formattedAverage = getFormattedToolTipValue(average.toString())

          return `Time: ${dateTime}\nMin: ${formattedMin} ${sensor.unitType}\nMax: ${formattedMax} ${sensor.unitType}\nAverage: ${formattedAverage} ${sensor.unitType}`
        },
        // animation: false,
        axisPointer: {
          type: 'cross',
          lineStyle: {
            color: theme.colors.tertiary,
          },
          crossStyle: {
            color: theme.colors.tertiary,
          },
          label: {
            backgroundColor: theme.colors.surfaceVariant,
            // color: 'green',
          },
        },
        trigger: 'axis',
        // Whether confine tooltip content in the view rect of chart instance.
        // Useful when tooltip is cut because of 'overflow: hidden' set on outer dom of chart instance, or because of narrow screen on mobile.
        confine: true,
      },

      xAxis: {
        // animation: false,
        data: getDateValues(values, selectedPeriod),
      },
      yAxis: {
        scale: true,
        // animation: false,
        splitLine: {
          show: false,
        },
      },

      grid: {
        right: 0,
        left: 0,
        top: 14,
        bottom: 20,
      },

      series: [
        {
          name: 'points',
          type: 'custom',
          renderItem,
          markLine: {
            animation: false,
            symbol: 'none',
            label: {
              color: theme.colors.onSurface,
              distance: 0,
              formatter: `{c} ${sensor.unitType}`,
            },
            lineStyle: {
              type: 'dotted',
            },
            data: criticalValues,
          },

          dimensions: ['lowest', 'highest'],

          encode: {
            // x: 0,
            y: [1, 2],
            tooltip: [1, 2],
          },
          data: getMinMaxValues(values),
        },
        {
          name: 'average',
          type: 'line',

          // TODO - is sensor updated - animation:false
          // animation: false,
          itemStyle: {
            color: theme.colors.primary,
          },
          showSymbol: false,
          lineStyle: {
            color: theme.colors.primary,
          },
          areaStyle: { color: theme.colors.primary, opacity: 0.15 },
          data: getAverage(values),
        },
      ],
    }
    let chart: EChartsType
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: windowWidth,
        height: windowHeight / 3.5,
      })
      chart.setOption(option, true)
    }
    return () => chart?.dispose()
  }, [
    criticalValues,
    selectedPeriod,
    sensor.unitType,
    theme,
    values,
    windowHeight,
    windowWidth,
  ])

  return <SkiaChart ref={skiaRef} />
}

const getMinMaxValues = (values: TValues) => {
  const result = values
    .map((item, index) => {
      if (!item) return null
      return [index, item.min, item.max]
    })
    .filter(isDefined)
  return result
}

const getAverage = (values: TValues) => {
  const res = values
    .map((item) => {
      if (!item) return null
      return item.average
    })
    .filter(isDefined)
  return res
}

const renderItem = (
  params: CustomSeriesRenderItemParams,
  api: CustomSeriesRenderItemAPI,
): CustomSeriesRenderItemReturn => {
  const xValue = api.value(0)
  const lowPoint = api.coord([xValue, api.value(1)])
  const highPoint = api.coord([xValue, api.value(2)])

  return {
    type: 'group',
    children: [
      {
        type: 'line',
        style: {
          lineWidth: 2,

          stroke: 'rgb(111, 219, 169)',
        },
        shape: {
          x1: lowPoint[0],
          y1: lowPoint[1],
          x2: highPoint[0],
          y2: highPoint[1],
        },
      },
    ],
  }
}

const getDateValues = (values: TValues, period: TDateRangeTypeEnum) => {
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

/**
 * Echarts do not support typescript fully, so we need to do some magic typescript casting.
 * Returns the formatted value (min/max/average) for the tooltip.
 *
 * The value is always a number, but the function is typed to accept string, number and Date because of the echarts tooltip params.
 */
const getFormattedToolTipValue = (value: string | number | Date) => {
  return formatSensorValue(parseFloat(value.toString()))
}
