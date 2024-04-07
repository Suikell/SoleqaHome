import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { CONTENT_MARGIN } from '~styles/spacing'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = RequiredChildren & {
  label: string
}

export const GroupCardDescription: React.FC<TProps> = ({ label, children }) => {
  const styles = useStylesWithTheme(styleCreator)

  return (
    <View style={styles.content}>
      <Text variant={`labelMedium`} style={styles.label}>
        {label}
      </Text>
      <Text variant={`bodySmall`}>{children}</Text>
    </View>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    label: {
      color: theme.colors.tertiary,
    },
    content: {
      marginHorizontal: CONTENT_MARGIN,
      marginBottom: shrink(20),
    },
  })
