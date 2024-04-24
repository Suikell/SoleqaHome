import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { SensorScreenContent } from '~screens/SensorsScreen/components/SensorScreenContent'
import { shrink } from '~utils/helpers/shrink'

export const SensorsScreen = () => {
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Sensors
        </Text>
      </Appbar.Header>
      <SensorScreenContent />
    </>
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
