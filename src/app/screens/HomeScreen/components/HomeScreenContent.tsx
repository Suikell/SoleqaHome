import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { CONTENT_MARGIN } from '~styles/spacing'
import { ActuatorList } from '~ui/Actuator/components/ActuatorList'
import { CategoryNavigation } from '~ui/Category/CategoryNavigation'
import { SensorList } from '~ui/Sensor/components/SensorList'

type TProps = NoChildren

export const HomeScreenContent: React.FC<TProps> = () => {
  const { logout } = useAuthCtx()
  const { selectedCategoryIndex, categories } = useCategoriesCtx()

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryIndex,
  )

  const sensors = selectedCategory?.sensors
  const actuators = selectedCategory?.actuators

  const sensorIds = sensors ? sensors.map((sensor) => sensor.id) : undefined
  const actuatorIds = actuators
    ? actuators?.map((actuator) => actuator.id)
    : undefined

  return (
    <View style={styles.content}>
      <CategoryNavigation />
      <SensorList onlyFavorite label={`Favorites`} sensorIds={sensorIds} />
      <ActuatorList onlyFavorite actuatorIds={actuatorIds} />
      <Button onPress={logout}>Logout</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
    gap: CONTENT_MARGIN,
  },
})
