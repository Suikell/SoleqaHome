import * as React from 'react'

import { TNavigationProps } from '~navigation/types'
import { SensorDetailContent } from '~screens/SensorDetailScreen/components/SensorDetailContent'
import { GraphControlProvider } from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { SensorDetailProvider } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { useSensorSetName } from '~screens/SensorDetailScreen/hooks/useSensorSetName'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'SensorDetail'>

export const SensorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, sensorId } = route.params
  const { sensorName, setSensorName } = useSensorSetName()

  const onNameChange = React.useCallback(
    (newName: string) => {
      setSensorName(sensorId, newName)
    },
    [sensorId, setSensorName],
  )

  return (
    <>
      <DetailAppBar title={sensorName ?? name} onNameChange={onNameChange} />

      <SensorDetailProvider sensorId={sensorId}>
        <GraphControlProvider sensorId={sensorId}>
          <SensorDetailContent />
        </GraphControlProvider>
      </SensorDetailProvider>
    </>
  )
}
