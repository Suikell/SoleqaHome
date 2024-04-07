import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren & {
  label: string
}
export const CardLabel: React.FC<TProps> = ({ label }) => {
  const styles = useStylesWithTheme(styleCreator)
  return (
    <Text variant={`labelMedium`} style={styles.label}>
      {label}
    </Text>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    label: {
      color: theme.colors.tertiary,
    },
  })
