import * as React from 'react'

import { TNavigationProps } from '~navigation/types'
import { SensorDetailContent } from '~screens/SensorDetailScreen/components/SensorDetailContent'
import { GraphControlProvider } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { SensorDetailProvider } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'SensorDetail'>

export const SensorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, sensorId } = route.params

  return (
    <>
      <DetailAppBar title={name} />

      <SensorDetailProvider sensorId={sensorId}>
        <GraphControlProvider sensorId={sensorId}>
          <SensorDetailContent />
        </GraphControlProvider>
      </SensorDetailProvider>
    </>
  )
}
