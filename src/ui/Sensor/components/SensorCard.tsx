import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { TFSensorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { Card } from '~ui/Cards/Card'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { SparkLine } from '~ui/Sensor/components/SparkLine'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  sensor: TFSensorBase
  setFavoriteSensorValue: (sensor: TFSensorBase, favorite: boolean) => void
}

export const SensorCard: React.FC<TProps> = ({
  setFavoriteSensorValue,
  sensor,
}) => {
  console.log('i am waiting')

  const navigation = useNavigation()

  const setFavorite = () => {
    setFavoriteSensorValue(sensor, !sensor.favorite)
  }

  const onCardPress = () => {
    if (!sensor.id || !sensor.name) return null

    navigation.navigate('SensorDetail', {
      sensorId: sensor.id,
      name: sensor.name,
    })
  }

  return (
    <Card
      onPress={onCardPress}
      label={sensor.name}
      favorite={sensor.favorite}
      setFavorite={setFavorite}
    >
      <View style={styles.container}>
        <SensorValue
          value={sensor.currentValue}
          unitType={sensor.unitType}
          valueFontWeight={`600`}
        />
        <SparkLine sensorValues={sensor.values} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: shrink(16),
  },
  valueContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: `center`,
    gap: shrink(16),
  },
})
