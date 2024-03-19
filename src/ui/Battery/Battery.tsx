import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  batteryLevel: Nullable<number>
}

export const Battery: React.FC<TProps> = ({ batteryLevel }) => {
  const batteryIcon = getBatteryIcon(batteryLevel)
  return (
    <View style={styles.container}>
      <Text variant={`titleMedium`}>{batteryLevel} %</Text>
      <View style={styles.battery}>
        <Icon source={batteryIcon} size={40} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  battery: {
    transform: [{ rotate: `90deg` }],
  },
  container: {
    flexDirection: `row`,
    alignItems: `center`,
    gap: shrink(16),
  },
})

//* HELPERS

const getBatteryIcon = (batteryLevel?: Nullable<number>): string => {
  if (!batteryLevel) {
    return 'battery-alert-variant-outline'
  }
  if (batteryLevel > 95) {
    return 'battery'
  }

  const roundedValue =
    batteryLevel < 5 ? 10 : Math.round(batteryLevel / 10) * 10
  const battery = 'battery-'
  return battery.concat(roundedValue.toString())
}
