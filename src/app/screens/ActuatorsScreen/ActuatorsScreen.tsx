import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

export const ActuatorsScreen = () => {
  // const { sensorCategories, setSensorFavoriteValue } = useLoadSensors()

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Actuators
        </Text>
        {/* TODO <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <View style={styles.content}>
        {/* {sensorCategories &&
      sensorCategories.map((category) => (
        <SensorList
          key={category.id}
          label={category.name}
          sensors={category.sensors}
          setFavoriteSensorValue={setSensorFavoriteValue}
        />
      ))} */}
      </View>
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
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
