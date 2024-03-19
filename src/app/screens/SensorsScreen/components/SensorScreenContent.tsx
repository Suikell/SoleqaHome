import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { useSensorCategoriesCtx } from '~screens/SensorsScreen/contexts/SensorCategoriesProvider'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { SensorList } from '~ui/Sensor/components/SensorList'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorScreenContent: React.FC<TProps> = () => {
  const { sensorCategories, setSensorFavoriteValue, loading } =
    useSensorCategoriesCtx()

  if (loading) return <LoadingIndicator />

  return (
    <View style={styles.content}>
      {sensorCategories &&
        sensorCategories.map((category) => (
          <SensorList
            key={category.id}
            label={category.name}
            sensors={category.sensors}
            setFavoriteSensorValue={setSensorFavoriteValue}
          />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: shrink(48),
  },
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
