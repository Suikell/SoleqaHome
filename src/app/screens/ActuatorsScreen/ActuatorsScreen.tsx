import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { ActuatorsScreenContent } from '~screens/ActuatorsScreen/components/ActuatorsScreenContent'
import { ActuatorCategoriesProvider } from '~screens/ActuatorsScreen/contexts/ActuatorCategoriesProvider'
import { shrink } from '~utils/helpers/shrink'

export const ActuatorsScreen = () => {
  // const { sensorCategories, setSensorFavoriteValue } = useLoadSensors()

  return (
    <ActuatorCategoriesProvider>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Actuators
        </Text>
        {/* TODO <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <ActuatorsScreenContent />
    </ActuatorCategoriesProvider>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: shrink(48),
  },
})
