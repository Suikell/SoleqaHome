import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { useActuatorCategoriesCtx } from '~screens/ActuatorsScreen/contexts/ActuatorCategoriesProvider'
import { ActuatorList } from '~ui/Actuator/components/ActuatorList'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const ActuatorsScreenContent: React.FC<TProps> = () => {
  const { actuatorCategories, setActuatorFavoriteValue, loading } =
    useActuatorCategoriesCtx()

  if (loading) return <LoadingIndicator />

  return (
    <View style={styles.content}>
      {actuatorCategories &&
        actuatorCategories.map((category) => (
          <ActuatorList
            key={category.id}
            label={category.name}
            actuators={category.actuators}
            setFavoriteActuatorValue={setActuatorFavoriteValue}
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
