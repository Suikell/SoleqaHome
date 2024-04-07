import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = RequiredChildren

export const EmphasisText: React.FC<TProps> = ({ children }) => {
  const styles = useStylesWithTheme(styleCreator)

  return <Text style={styles.emphasis}>{children}</Text>
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    emphasis: {
      color: theme.colors.tertiary,
      fontWeight: 'bold',
    },
  })
