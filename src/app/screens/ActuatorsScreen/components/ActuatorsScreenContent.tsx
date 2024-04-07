import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { CONTENT_MARGIN } from '~styles/spacing'
import { ActuatorList } from '~ui/Actuator/components/ActuatorList'

type TProps = NoChildren

export const ActuatorsScreenContent: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()

  return (
    <View style={styles.content}>
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
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
    gap: CONTENT_MARGIN,
  },
})
