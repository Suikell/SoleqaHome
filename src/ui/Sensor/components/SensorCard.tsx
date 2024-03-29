import * as React from 'react'

import { TFSensorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { DeviceCard } from '~ui/Cards/DeviceCard'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { SparkLine } from '~ui/Sensor/components/SparkLine'

type TProps = NoChildren & {
  sensor: TFSensorBase
  setFavoriteSensorValue: (sensor: TFSensorBase, favorite: boolean) => void
}

export const SensorCard: React.FC<TProps> = ({
  setFavoriteSensorValue,
  sensor,
}) => {
  const navigation = useNavigation()

  const setFavorite = () => {
    setFavoriteSensorValue(sensor, !sensor.favorite)
  }

  const onCardPress = () => {
    if (!sensor || !sensor.name) return null

    navigation.navigate('SensorDetail', {
      sensorId: sensor.id,
      name: sensor.name,
    })
  }

  return (
    <DeviceCard
      onPress={onCardPress}
      label={sensor.name}
      favorite={sensor.favorite}
      setFavorite={setFavorite}
    >
      <SensorValue
        value={sensor.currentValue}
        unitType={sensor.unitType}
        valueFontWeight={`600`}
      />
      <SparkLine sensorValues={sensor.values} />
    </DeviceCard>
  )
}
