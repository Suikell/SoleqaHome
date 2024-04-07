import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { SCROLL_CONTENT_PADDING_BOTTOM } from '~styles/spacing'
import { SensorList } from '~ui/Sensor/components/SensorList'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorScreenContent: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {categories.map((category) => {
          const sensorIds = category.sensors.map((sensor) => sensor.id)
          if (sensorIds.length === 0) return null
          return (
            <SensorList
              key={category.id}
              label={category.name}
              sensorIds={sensorIds}
            />
          )
        })}
      </View>
    </ScrollView>
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
  scrollContent: {
    paddingBottom: SCROLL_CONTENT_PADDING_BOTTOM,
  },
})
