import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { ActuatorsScreenContent } from '~screens/ActuatorsScreen/components/ActuatorsScreenContent'
import { shrink } from '~utils/helpers/shrink'

export const ActuatorsScreen = () => {
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Actuators
        </Text>
      </Appbar.Header>
      <ActuatorsScreenContent />
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
