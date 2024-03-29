import * as React from 'react'

import { DetailedGraph } from '~screens/SensorDetailScreen/components/DetailedGraph'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { useLoadHistoricalValues } from '~ui/Sensor/hooks/useLoadHistoricalValues'

type TProps = NoChildren

export const SensorGraph: React.FC<TProps> = () => {
  const { values, loading } = useLoadHistoricalValues()

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    // <View style={{ height: 250 }}>
    <DetailedGraph values={values} />
    // </View>
  )
}
