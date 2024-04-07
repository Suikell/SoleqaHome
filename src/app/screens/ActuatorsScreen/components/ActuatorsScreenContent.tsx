import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { CONTENT_MARGIN, SCROLL_CONTENT_PADDING_BOTTOM } from '~styles/spacing'
import { ActuatorList } from '~ui/Actuator/components/ActuatorList'

type TProps = NoChildren

export const ActuatorsScreenContent: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()

  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.scrollContent}>
        {categories.map((category) => {
          const actuatorIds = category.actuators.map((actuator) => actuator.id)
          if (actuatorIds.length === 0) return null
          return (
            <ActuatorList
              key={category.id}
              label={category.name}
              actuatorIds={actuatorIds}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
    gap: CONTENT_MARGIN,
  },
  scrollContent: {
    paddingBottom: SCROLL_CONTENT_PADDING_BOTTOM,
  },
})
