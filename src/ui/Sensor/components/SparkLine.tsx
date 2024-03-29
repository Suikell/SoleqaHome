import { SkiaChart, SVGRenderer } from '@wuba/react-native-echarts'
import { CustomChart, LineChart } from 'echarts/charts'
import { GridComponent, ToolboxComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { EChartsType } from 'echarts/core'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { TFSensorBase } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TSensorValues = TFSensorBase['values']

type TProps = NoChildren & {
  sensorValues: TSensorValues
}

echarts.use([
  SVGRenderer,
  LineChart,
  GridComponent,
  CustomChart,
  ToolboxComponent,
])

const time = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

const name = 'testName'

const getData = (values: TSensorValues) => {
  if (!values) return []

  const filteredValues = values.map((value) => {
    if (!isDefined(value)) return null
    return value.avgValue
  })
  return filteredValues
}

export const SparkLine = ({ sensorValues }: TProps) => {
  const theme = useTheme()

  const windowWidth = Dimensions.get('window').width
  const width = (windowWidth * 48) / 100
  const skiaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const option = {
      toolbox: { show: false },

      xAxis: {
        show: false,
        data: time,
      },
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      grid: {
        top: 0,
        width,
        height: 60,
      },

      series: [
        {
          name,
          data: getData(sensorValues),

          type: 'line',
          encode: { x: 'time', y: name },
          showSymbol: false,
          lineStyle: { width: 1 },
          itemStyle: { color: theme.colors.primary },
          areaStyle: { opacity: 0.15 },
        },
      ],
    }
    let chart: EChartsType
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: width + 20,
        height: 50,
      })
      chart.setOption(option, true)
    }
    return () => chart?.dispose()
  }, [sensorValues, theme.colors.primary, width])

  return (
    <View style={{ left: -shrink(width / 2) }}>
      <SkiaChart ref={skiaRef} />
    </View>
  )
}

// // const styles = StyleSheet.create({
// //   container: {
// //     // marginRight: shrink(48),
// //   },
// // })
