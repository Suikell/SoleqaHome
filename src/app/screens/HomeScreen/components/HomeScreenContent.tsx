import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'
import { useCriticalSensorsCtx } from 'src/app/shared/contexts/CriticalSensorsProvider'

import { CONTENT_MARGIN, SCROLL_PADDING_BOTTOM } from '~styles/spacing'
import { ActuatorList } from '~ui/Actuator/components/ActuatorList'
import { CategoryNavigation } from '~ui/Category/CategoryNavigation'
import { SensorList } from '~ui/Sensor/components/SensorList'

type TProps = NoChildren

export const HomeScreenContent: React.FC<TProps> = () => {
  const { selectedCategoryIndex, categories, sensors } = useCategoriesCtx()
  const { criticalSensors } = useCriticalSensorsCtx()
  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryIndex,
  )

  const categorySensors = selectedCategory?.sensors
  const actuators = selectedCategory?.actuators

  const sensorIds = categorySensors
    ? categorySensors.map((sensor) => sensor.id)
    : undefined
  const actuatorIds = actuators
    ? actuators?.map((actuator) => actuator.id)
    : undefined

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        <CategoryNavigation />
        <SensorList
          sensors={criticalSensors}
          sensorIds={sensorIds}
          label={`Critical`}
        />
        <SensorList
          sensors={sensors}
          onlyFavorite
          label={`Favorites`}
          sensorIds={sensorIds}
        />
        <ActuatorList onlyFavorite actuatorIds={actuatorIds} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
  },
  scrollContent: {
    paddingBottom: SCROLL_PADDING_BOTTOM / 1.5,
    gap: CONTENT_MARGIN,
  },
})
