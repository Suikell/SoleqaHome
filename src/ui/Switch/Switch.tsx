import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch as UISwitch, Text } from 'react-native-paper'

type TProps = NoChildren & {
  label?: string
  state: Nullable<boolean>
  onChange: PropsOf<typeof UISwitch>['onChange']
}

export const Switch: React.FC<TProps> = ({
  label = `State`,
  state = false,
  onChange,
}) => {
  return (
    <View style={styles.content}>
      <Text variant={`labelLarge`}>{label}:</Text>
      <UISwitch value={state || false} onChange={onChange} />
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
