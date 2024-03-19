import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import { CustomChart, LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { EChartsType } from 'echarts/core'
import {
  CustomSeriesRenderItemAPI,
  CustomSeriesRenderItemParams,
  CustomSeriesRenderItemReturn,
} from 'echarts/types/dist/shared'
import React, { useEffect, useRef } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

echarts.use([SVGRenderer, LineChart, GridComponent, CustomChart])

const generateRandomValue = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

const generateData = (count: number) => {
  const data = []
  for (let i = 0; i < count; i += 1) {
    const x = i
    const y1 = generateRandomValue(-30, 20)
    const y2 = generateRandomValue(y1, 30)
    data.push([x, y1, y2])
  }
  return data
}

const data = generateData(30)

const getAverage = (data: number[][]) => {
  const result = data.map((item) => (item[1] + item[2]) / 2)
  return result
}

function renderItem(
  params: CustomSeriesRenderItemParams,
  api: CustomSeriesRenderItemAPI,
): CustomSeriesRenderItemReturn {
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

export const SensorGraph = () => {
  const windowWidth = Dimensions.get('window').width
  const skiaRef = useRef<HTMLElement>(null)
  const theme = useTheme()

  useEffect(() => {
    const option = {
      xAxis: {
        show: false,
        data: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ],
        z: 10,
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
          z: 100,

          // numbers on the left
          axisLabel: {
            show: false,
            backgroundColor: theme.colors.background,
            inside: true,
            margin: 0,
            align: 'center',
            color: theme.colors.onSurface,
            width: 44,
            padding: [16, 0, 0, 0],
            formatter: '{value} ˚C', // formatterCallback
          },

          type: 'value',
          scale: true,
        },
      ],

      grid: {
        right: -20,
        left: 0,
        top: 0,
        bottom: 0,
      },

      series: [
        {
          name: 'area',
          type: 'line',
          encode: { x: 'time', y: 'area' },
          showSymbol: false,
          lineStyle: { opacity: 0 },
          itemStyle: { color: theme.colors.primary },
          areaStyle: { opacity: 0.1 },
          data: getAverage(data),
        },
        {
          name: 'test',
          type: 'custom',
          renderItem,

          dimensions: ['-', 'lowest', 'highest'],

          //   lineStyle: { width: 1 },
          //   itemStyle: { color: theme.colors.primary },
          //   areaStyle: { opacity: 0.15 },

          encode: {
            x: 1,
            y: [1, 2],
            tooltip: [1, 2],
          },
          data,
        },
      ],
    }
    let chart: EChartsType
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: windowWidth,
        height: 200,
      })
      chart.setOption(option, true)
    }
    return () => chart?.dispose()
  }, [theme, windowWidth])

  return (
    <View style={styles.container}>
      <SkiaChart ref={skiaRef} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: shrink(64),
  },
})
