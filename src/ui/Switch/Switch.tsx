import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch as UISwitch, Text } from 'react-native-paper'

type TProps = NoChildren & {
  state: Nullable<boolean>
}

export const Switch: React.FC<TProps> = ({ state = false }) => {
  return (
    <View style={styles.content}>
      <Text variant={`labelLarge`}>State:</Text>
      <UISwitch value={state || false} />
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
