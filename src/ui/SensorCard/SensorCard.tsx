import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, IconButton, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

const sensor = {
  name: 'Temperature',
  favorite: false,
  value: 25,
  unit: '°C',
}

export const SensorCard: React.FC<TProps> = () => {
  return (
    <Card mode={`contained`}>
      <View style={styles.titleContainer}>
        <Text variant={`titleMedium`}>{sensor.name}</Text>
        <IconButton icon={`cards-heart${sensor.favorite ? `` : `-outline`}`} />
      </View>
      <Card.Content>
        <View style={styles.valueContainer}>
          <Text variant={`displaySmall`} style={{ fontWeight: `600` }}>
            {sensor.value}
          </Text>
          <Text variant={`titleLarge`}>{sensor.unit}</Text>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: `100%`,
    justifyContent: 'space-between',
    marginLeft: shrink(48),
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: `center`,
    gap: shrink(16),
  },
  name: {
    marginLeft: shrink(16),
  },
})
