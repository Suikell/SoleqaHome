import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  state?: Nullable<boolean>
}

export const Online: React.FC<TProps> = ({ state }) => {
  const theme = useAppTheme()

  const stateText = state ? `online` : `offline`
  const color = state ? theme.colors.primary : theme.colors.error
  return (
    <View style={styles.row}>
      <Text variant={`titleMedium`}>{stateText}</Text>
      <Icon size={20} source={`checkbox-blank-circle`} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingRight: shrink(8),
  },
})
