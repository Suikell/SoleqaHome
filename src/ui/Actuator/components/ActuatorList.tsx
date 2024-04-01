import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { ActuatorCard } from '~ui/Actuator/components/ActuatorCard'
import { shrink } from '~utils/helpers/shrink'

type TProps = {
  label?: Nullable<string>
  actuatorIds?: RoA<ID>
  onlyFavorite?: boolean
}

export const ActuatorList: React.FC<TProps> = ({
  label,
  actuatorIds,
  onlyFavorite,
}) => {
  const { actuators } = useCategoriesCtx()

  if (actuators.length === 0) {
    return null
  }

  return (
    <>
      {label && <Text variant={`titleLarge`}>{label}</Text>}
      <View style={styles.sensors}>
        {actuators.map((actuator) => {
          // if no actuatorIds => show all actuators as it's the All category
          if (actuatorIds && !actuatorIds.includes(actuator.id)) {
            return null
          }
          if (onlyFavorite && !actuator.favorite) {
            return null
          }
          return <ActuatorCard key={actuator.id} actuator={actuator} />
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
