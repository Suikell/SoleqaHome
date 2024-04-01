import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

import { SensorCard } from './SensorCard'

type TProps = {
  label?: Nullable<string>
  sensorIds?: RoA<ID>
  onlyFavorite?: boolean
}

export const SensorList: React.FC<TProps> = ({
  label,
  sensorIds,
  onlyFavorite,
}) => {
  const { sensors } = useCategoriesCtx()

  if (sensors.length === 0) {
    return null
  }

  return (
    <>
      {label && <Text variant={`titleLarge`}>{label}</Text>}
      <View style={styles.sensors}>
        {sensors.map((sensor) => {
          // if no sensorIds => show all sensors as it's the All category
          if (isDefined(sensorIds) && !sensorIds.includes(sensor.id)) {
            return null
          }
          if (onlyFavorite && !sensor.favorite) {
            return null
          }
          return <SensorCard key={sensor.id} sensor={sensor} />
        })}
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
