import * as React from 'react'
import { StyleSheet, TextStyle, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TFSensorBase } from '~graphql/generated/graphql'
import { formatSensorValue } from '~ui/Sensor/helpers/formatSensorValue'
import { shrink } from '~utils/helpers/shrink'
import { useDisabledStyles } from '~utils/hooks/useDisabledStyles'

type TProps = NoChildren & {
  value: TFSensorBase['currentValue']
  unitType: TFSensorBase['unitType']
  disabled?: TFSensorBase['isOnline']
  valueVariant?: PropsOf<typeof Text>['variant']
  unitVariant?: PropsOf<typeof Text>['variant']
  valueFontWeight?: TextStyle['fontWeight']
}

export const SensorValue: React.FC<TProps> = ({
  value,
  unitType,
  disabled = false,
  valueVariant = `headlineLarge`,
  unitVariant = `titleLarge`,
  valueFontWeight,
}) => {
  const disabledStyles = useDisabledStyles()
  return (
    <View style={styles.valueContainer}>
      <Text
        numberOfLines={1}
        variant={valueVariant}
        style={[
          { fontWeight: valueFontWeight },
          disabled && disabledStyles.onSurface,
        ]}
      >
        {formatSensorValue(value)}
      </Text>
      <Text
        variant={unitVariant}
        style={disabled ? disabledStyles.onSurface : undefined}
      >
        {unitType}
      </Text>
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
