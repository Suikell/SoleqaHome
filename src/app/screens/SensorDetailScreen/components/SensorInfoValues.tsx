import * as React from 'react'

import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { FlexRow } from '~ui/Layout/FlexRow'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorInfoValues: React.FC<TProps> = () => {
  const { sensor } = useSensorCtx()
  return (
    <FlexRow
      justifyContent={`space-between`}
      marginRight={shrink(48)}
      marginTop={shrink(48)}
    >
      <SensorValue
        value={sensor.currentValue}
        unitType={sensor.unitType}
        valueVariant={`displayMedium`}
        unitVariant={`displaySmall`}
      />
      <StatusInfo
        isOnline={sensor.isOnline}
        batteryLevel={sensor.batteryLevel}
      />
    </FlexRow>
  )
}
