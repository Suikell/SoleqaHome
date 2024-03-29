import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = {
  batteryLevel: Nullable<number>
}

export const Battery: React.FC<TProps> = ({ batteryLevel }) => {
  const batteryIcon = getBatteryIcon(batteryLevel)
  return (
    <FlexRow gap={shrink(16)}>
      <Text variant={`titleMedium`}>{batteryLevel} %</Text>
      <View style={styles.battery}>
        <Icon source={batteryIcon} size={40} />
      </View>
    </FlexRow>
  )
}

const styles = StyleSheet.create({
  battery: {
    transform: [{ rotate: `90deg` }],
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
