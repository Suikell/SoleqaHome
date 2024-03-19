import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TFSensorBase } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

import { SensorCard } from './SensorCard'

type TProps = {
  sensors?: Nullable<RoA<TFSensorBase>>
  label?: Nullable<string>
  setFavoriteSensorValue: PropsOf<typeof SensorCard>['setFavoriteSensorValue']
}

export const SensorList: React.FC<TProps> = ({
  label,
  sensors,
  setFavoriteSensorValue,
}) => {
  console.log('i am waiting in SensorList.tsx')

  if (!isDefined(sensors) || sensors.length === 0) {
    return null
  }

  return (
    <>
      {label && <Text variant={`titleLarge`}>{label}</Text>}
      <View style={styles.sensors}>
        {sensors.map((sensor) => (
          <SensorCard
            key={sensor.id}
            sensor={sensor}
            setFavoriteSensorValue={setFavoriteSensorValue}
          />
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  sensors: {
    flexDirection: `row`,
    rowGap: shrink(48),
    flexWrap: 'wrap',
    justifyContent: `space-between`,
  },
})
