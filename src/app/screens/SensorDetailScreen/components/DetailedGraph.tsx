import { SvgChart, SVGRenderer } from '@wuba/react-native-echarts'
import { useAppTheme } from 'App'
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

import { useGraphValuesCtx } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import {
  getAverage,
  getDateValues,
  getFormattedToolTipValue,
  getMinMaxValues,
  TMinMax,
  TOverlayValues,
  TValues,
} from '~ui/Sensor/helpers/getGraphValues'

type TProps = NoChildren & {
  min: TMinMax['min']
  max: TMinMax['max']
  values: TValues
  overlayValues: TOverlayValues
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

export const DetailedGraph: React.FC<TProps> = ({
  min,
  max,
  values,
  overlayValues,
}) => {
  const { sensor } = useSensorCtx()
  const { criticalUnder, criticalOver, selectedPeriod, isOverlayVisible } =
    useGraphValuesCtx()
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

          const min = minMaxObject.data[1] || ``
          const max = minMaxObject.data[2] || ``
          const average = averageObject.value || ``

          const formattedMin = getFormattedToolTipValue(min)
          const formattedMax = getFormattedToolTipValue(max)
          // .value can be even more types than the value from data
          const formattedAverage = getFormattedToolTipValue(average.toString())

          const minMaxText = `Min: ${formattedMin}${sensor.unitType}\nMax: ${formattedMax}${sensor.unitType}\n`

          const showMinMax = selectedPeriod !== `HOUR`

          const formattedText = `${showMinMax ? minMaxText : ``}Average: ${formattedAverage}${sensor.unitType}`

          if (params.length === 3) {
            const overlayObject = params[2]
            const overlayAverageValue = overlayObject.value || ``
            const overlayAverage = getFormattedToolTipValue(
              overlayAverageValue.toString(),
            )
            return `${formattedText}\nOverlay: ${overlayAverage}${sensor.unitType}`
          }

          return formattedText
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
          },
        },
        trigger: 'axis',
        // Whether confine tooltip content in the view rect of chart instance.
        // Useful when tooltip is cut because of 'overflow: hidden' set on outer dom of chart instance, or because of narrow screen on mobile.
        confine: true,
      },

      xAxis: [
        {
          // animation: false,
          data: getDateValues(values, selectedPeriod),
        },
        {
          show: isOverlayVisible,

          name: 'Overlay time axis',
          nameLocation: 'center',
          nameTextStyle: {
            color: theme.custom.overlay,
            padding: 10,
            backgroundColor: theme.colors.surface,
          },
          data: getDateValues(overlayValues, selectedPeriod),
          axisTick: {
            inside: true,
          },
        },
      ],
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
        top: 40,
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
          // TODO - have animation only on first render
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
        {
          name: 'overlay',
          type: 'line',

          // TODO - is sensor updated - animation:false
          // animation: false,
          showSymbol: false,
          lineStyle: {
            color: theme.custom.overlay,
          },
          data: getAverage(overlayValues),
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
    isOverlayVisible,
    overlayValues,
    selectedPeriod,
    sensor.unitType,
    theme,
    values,
    windowHeight,
    windowWidth,
  ])

  // TODO - change to skia chart after the bug is fixed
  // https://github.com/wuba/react-native-echarts/issues/161
  return <SvgChart ref={skiaRef} />
}

//* HELPERS

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
