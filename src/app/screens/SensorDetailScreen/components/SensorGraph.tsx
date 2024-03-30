import * as React from 'react'
import { Dimensions, View } from 'react-native'

import { DetailedGraph } from '~screens/SensorDetailScreen/components/DetailedGraph'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { useLoadHistoricalValues } from '~ui/Sensor/hooks/useLoadHistoricalValues'

type TProps = NoChildren

export const SensorGraph: React.FC<TProps> = () => {
  const { loading, values, minMax, overlayValues } = useLoadHistoricalValues()
  const windowHeight = Dimensions.get('window').height

  if (loading) {
    return (
      <View style={{ height: windowHeight / 3.5 }}>
        <LoadingIndicator />
      </View>
    )
  }

  return (
    <DetailedGraph
      values={values}
      max={minMax.max}
      min={minMax.min}
      overlayValues={overlayValues}
    />
  )
}
