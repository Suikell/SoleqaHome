import { SvgChart, SVGRenderer } from '@wuba/react-native-echarts'
import { CustomChart, LineChart } from 'echarts/charts'
import { GridComponent, ToolboxComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { EChartsType } from 'echarts/core'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import { useTheme } from 'react-native-paper'

import { TFSensorBase } from '~graphql/generated/graphql'
import { getAverage, getDateValues } from '~ui/Sensor/helpers/getGraphValues'
import { shrink } from '~utils/helpers/shrink'

type TSensorValues = TFSensorBase['values']

type TProps = NoChildren & {
  disabled?: boolean
  sensorValues: TSensorValues
}

echarts.use([
  SVGRenderer,
  LineChart,
  GridComponent,
  CustomChart,
  ToolboxComponent,
])

const name = 'averageValues'

export const SparkLine = ({ disabled = false, sensorValues }: TProps) => {
  const theme = useTheme()

  const windowWidth = Dimensions.get('window').width
  const width = (windowWidth * 48) / 100
  const skiaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const option = {
      toolbox: { show: false },

      xAxis: {
        show: false,
        data: getDateValues(sensorValues || [], 'HOUR'),
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
          data: getAverage(sensorValues || []),

          type: 'line',
          encode: { x: 'time', y: name },
          showSymbol: false,
          lineStyle: { width: 1 },
          itemStyle: {
            color: disabled
              ? theme.colors.primaryContainer
              : theme.colors.primary,
          },
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
  }, [
    disabled,
    sensorValues,
    theme.colors.primary,
    theme.colors.primaryContainer,
    width,
  ])

  // TODO - change to skia chart after the bug is fixed
  // https://github.com/wuba/react-native-echarts/issues/161
  return (
    <View style={{ left: -shrink(width / 2) }}>
      <SvgChart ref={skiaRef} />
    </View>
  )
}
