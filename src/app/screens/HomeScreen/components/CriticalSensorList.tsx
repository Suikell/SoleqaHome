import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useCriticalSensorsCtx } from 'src/app/shared/contexts/CriticalSensorsProvider'

import { CONTENT_MARGIN } from '~styles/spacing'
import { SensorCard } from '~ui/Sensor/components/SensorCard'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  sensorIds?: RoA<ID>
}

export const CriticalSensorList: React.FC<TProps> = ({ sensorIds }) => {
  const { criticalSensors } = useCriticalSensorsCtx()

  if (criticalSensors.length === 0) {
    return null
  }

  return (
    <View style={styles.labelContainer}>
      <Text variant={`titleLarge`}>{`Critical`}</Text>
      <View style={styles.sensors}>
        {criticalSensors.map((sensor) => {
          // if no sensorIds => show all sensors as it's the All category
          if (isDefined(sensorIds) && !sensorIds.includes(sensor.id)) {
            return null
          }
          return <SensorCard key={sensor.id} sensor={sensor} />
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sensors: {
    flexDirection: `row`,
    rowGap: shrink(48),
    flexWrap: 'wrap',
    justifyContent: `space-between`,
  },
  labelContainer: {
    gap: CONTENT_MARGIN,
  },
})
