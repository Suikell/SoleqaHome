import * as React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TFSensorBase } from '~graphql/generated/graphql'
import { getUnit } from '~utils/helpers/getUnit'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  value: TFSensorBase['currentValue']
  unitType: TFSensorBase['unitType']
  valueVariant?: PropsOf<typeof Text>['variant']
  unitVariant?: PropsOf<typeof Text>['variant']
  valueFontWeight?: TextStyle['fontWeight']
}

export const SensorValue: React.FC<TProps> = ({
  value,
  unitType,
  valueVariant = `headlineLarge`,
  unitVariant = `titleLarge`,
  valueFontWeight,
}) => {
  const formattedValue = value ? value.toFixed(1).replace(/\.0$/, '') : null
  return (
    <View style={styles.valueContainer}>
      <Text
        numberOfLines={1}
        variant={valueVariant}
        style={{ fontWeight: valueFontWeight }}
      >
        {formattedValue}
      </Text>
      <Text variant={unitVariant}>{getUnit(unitType)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  valueContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: `center`,
    gap: shrink(16),
  },
})
