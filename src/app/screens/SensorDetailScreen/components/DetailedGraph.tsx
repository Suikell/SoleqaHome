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
} from 'echarts/types/dist/shared'
import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'

import { TDateRangeTypeEnum } from '~graphql/generated/graphql'
import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useLoadHistoricalValues } from '~ui/Sensor/hooks/useLoadHistoricalValues'
import { isDefined } from '~utils/helpers/isDefined'

type TValues = ReturnType<typeof useLoadHistoricalValues>['values']

type TProps = NoChildren & {
  values: TValues
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

export const DetailedGraph: React.FC<TProps> = ({ values }) => {
  const numberOfValues = values.length
  const { criticalUnder, criticalOver, selectedPeriod } = useGraphValuesCtx()
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const skiaRef = useRef<HTMLElement>(null)
  const theme = useAppTheme()

  useEffect(() => {
    const option = {
      tooltip: {
        backgroundColor: theme.colors.surfaceVariant,
        textStyle: {
          color: theme.colors.onSurface,
        },

        // formatter: '{b} {c0}_{c1}_{c2},{c3}',
        animation: false,
        trigger: 'axis',
        // Whether confine tooltip content in the view rect of chart instance.
        // Useful when tooltip is cut because of 'overflow: hidden' set on outer dom of chart instance, or because of narrow screen on mobile.
        confine: true,
        axisPointer: {
          type: 'cross',
        },
        // position(
        //   pos: [number, number],
        //   params: Anything
        //   el: Anything,
        //   elRect: Anything,
        //   size: {
        //     contentSize: Anything
        //     viewSize: [number, number]
        //   },
        // ) {
        //   const obj: Record<string, number> = { top: 10 }
        //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30
        //   return obj
        // },
      },

      xAxis: {
        // show: false,
        data: getDateValues(values, selectedPeriod),
        // z: 10,
      },
      yAxis: [
        {
          splitLine: {
            lineStyle: {
              color: theme.colors.secondary,
              opacity: 0.1,
            },
            // show: false,
          },
          // z: 100,

          // // // numbers on the left
          // axisLabel: {
          //   show: true,
          //   // backgroundColor: theme.colors.background,
          //   // inside: true,
          //   margin: 26,
          //   align: 'center',
          //   // color: theme.colors.onSurface,
          //   width: 44,
          //   padding: [16, 0, 0, 0],
          //   formatter: '{value} ppm', // formatterCallback
          // },

          type: 'value',
          scale: true,
        },
      ],

      grid: {
        right: -20,
        left: 0,
        top: 0,
        // bottom: 0,
      },

      series: [
        {
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: theme.custom.criticalUnder,
          },
          data: new Array(numberOfValues).fill(criticalUnder),
        },
        {
          type: 'line',
          showSymbol: false,
          lineStyle: {
            color: theme.custom.criticalOver,
          },
          data: new Array(numberOfValues).fill(criticalOver),
        },
        // For optimal/critical lines
        //  ======================================
        //  ======================================
        // {
        //   name: 'area',
        //   type: 'line',
        //   encode: { x: 'time', y: 'area' },
        //   showSymbol: false,
        //   lineStyle: { opacity: 0 },
        //   itemStyle: { color: theme.colors.primary },
        //   areaStyle: { opacity: 0.1 },
        //   data: getAverage(values),
        // },
        {
          name: 'points',
          type: 'custom',
          renderItem,

          dimensions: ['lowest', 'highest'],

          // lineStyle: { width: 5 },
          // itemStyle: { color: theme.colors.primary },
          // areaStyle: { opacity: 0.15 },

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

          // encode: { x: 'time', y: 'area' },
          showSymbol: false,
          //   lineStyle: { opacity: 0 },
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
        // height: 500,
      })
      chart.setOption(option, true)
    }
    return () => chart?.dispose()
  }, [
    criticalOver,
    criticalUnder,
    numberOfValues,
    selectedPeriod,
    theme,
    windowHeight,
    values,
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
  return values
    .map((item) => {
      if (!item) return null
      return item.average
    })
    .filter(isDefined)
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
  const result = values
    .map((value) => {
      if (!value) return null
      return getTimeFormat(value?.startDate, period)
    })
    .filter(isDefined)
  console.log('result', result)
  return result
}

const getTimeFormat = (date: Date, period: TDateRangeTypeEnum) => {
  if (period === 'DAY' || period === 'HOUR') {
    return format(date, 'HH:mm')
  }
  return format(date, 'dd.MM')
}

// const getCriticalData = (max, min, value: number) => {
// new Array(numberOfValues).fill(criticalUnder),
// }
