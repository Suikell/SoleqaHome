import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { SensorScreenContent } from '~screens/SensorsScreen/components/SensorScreenContent'
import { SensorCategoriesProvider } from '~screens/SensorsScreen/contexts/SensorCategoriesProvider'
import { shrink } from '~utils/helpers/shrink'

export const SensorsScreen = () => {
  // const { sensorCategories, setSensorFavoriteValue } = useLoadSensors()

  return (
    <SensorCategoriesProvider>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Sensors
        </Text>
        {/* TODO <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <SensorScreenContent />
    </SensorCategoriesProvider>
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
