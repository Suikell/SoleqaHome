import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch as UISwitch, Text } from 'react-native-paper'

import { useDisabledStyles } from '~utils/hooks/useDisabledStyles'

type TProps = NoChildren & {
  disabled?: boolean
  label?: string
  state: Nullable<boolean>
  onChange: PropsOf<typeof UISwitch>['onChange']
}

export const Switch: React.FC<TProps> = ({
  label = `State`,
  state = false,
  disabled = false,
  onChange,
}) => {
  const disabledStyles = useDisabledStyles()

  return (
    <View style={styles.content}>
      <Text
        style={disabled ? disabledStyles.onSurface : undefined}
        variant={`labelLarge`}
      >
        {label}:
      </Text>
      <UISwitch
        disabled={disabled}
        value={state || false}
        onChange={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: `center`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginHorizontal: 16,
    marginBottom: 16,
  },
})
