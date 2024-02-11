import * as React from "react"

import { LineChart } from "echarts/charts"
import { GridComponent } from "echarts/components"
import * as echarts from "echarts/core"
import { Dimensions, StyleSheet, View } from "react-native"

import { SkiaChart, SVGRenderer } from "@wuba/react-native-echarts"

// echarts.use([SVGRenderer, LineChart, GridComponent]);
echarts.use([SVGRenderer, LineChart, GridComponent])
export default function App() {
  const skiaRef = React.useRef<any>(null)
  const chartRef = React.useRef<any>(null)
  const [chartWidth, setChartWidth] = React.useState<number>(0)
  const [chartHeight, setChartHeight] = React.useState<number>(0)

  // Get the width and height of the container
  const handleLayout = (e: {
    nativeEvent: { layout: { width: number; height: number } }
  }) => {
    const { width, height } = e.nativeEvent.layout
    setChartWidth(width)
    setChartHeight(height)
  }

  // Screen orientation change event
  const handleDimensionsChange = (e: {
    screen: { width: number; height: number }
  }) => {
    const { width, height } = e.screen
    setChartWidth(width)
    setChartHeight(height)
  }

  React.useEffect(() => {
    Dimensions.addEventListener("change", handleDimensionsChange)

    let chart: any
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        renderer: "svg",
        width: chartWidth,
        height: chartHeight,
      })
      chart.setOption(option)
      chartRef.current = chart
    }
    return () => chart?.dispose()
  }, [])

  React.useEffect(() => {
    chartRef.current.resize({
      width: chartWidth,
      height: chartHeight,
    })
  }, [chartWidth, chartHeight])

  // The parent container box must have width and height in order to inherit
  return (
    <View style={styles.container} onLayout={handleLayout}>
      {/* <Button title="Change Orientation" onClick={} /> */}
      <SkiaChart ref={skiaRef} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: 50,
    minHeight: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
  },
  yAxis: {
    type: "value",
    min: "dataMin",
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed",
      },
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
      areaStyle: {
        color: "rgba(23, 255, 255, 0.8)",
      },
      lineStyle: {
        color: "#d6d6d7",
      },
      symbol: "circle",
      symbolSize: 8,
      itemStyle: {
        color: "#24262a",
      },
    },
  ],
}
