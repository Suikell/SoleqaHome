import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TFSensorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { DeviceCard } from '~ui/Cards/DeviceCard'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { SparkLine } from '~ui/Sensor/components/SparkLine'

type TProps = NoChildren & {
  sensor: TFSensorBase
}

export const SensorCard: React.FC<TProps> = ({ sensor }) => {
  const navigation = useNavigation()
  const { setFavoriteSensorValue } = useCategoriesUpdatersCtx()

  const setFavorite = () => {
    setFavoriteSensorValue(sensor.id, !sensor.favorite)
  }

  const onCardPress = () => {
    navigation.navigate('SensorDetail', {
      sensorId: sensor.id,
      name: sensor.name,
    })
  }

  return (
    <DeviceCard
      isOnline={sensor.isOnline}
      onPress={onCardPress}
      label={sensor.name}
      favorite={sensor.favorite}
      setFavorite={setFavorite}
    >
      <SensorValue
        disabled={!sensor.isOnline}
        value={sensor.currentValue}
        unitType={sensor.unitType}
        valueFontWeight={`600`}
      />
      <SparkLine disabled={!sensor.isOnline} sensorValues={sensor.values} />
    </DeviceCard>
  )
}
