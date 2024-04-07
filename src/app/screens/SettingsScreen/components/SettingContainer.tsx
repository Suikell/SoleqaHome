import { useAppTheme } from 'App'
import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { CONTENT_MARGIN } from '~styles/spacing'

type TProps = RequiredChildren & {
  label?: string
}

export const SettingContainer: React.FC<TProps> = ({ label, children }) => {
  const theme = useAppTheme()

  return (
    <View style={{ rowGap: CONTENT_MARGIN }}>
      {label && (
        <Text variant={`titleMedium`} style={{ color: theme.colors.tertiary }}>
          {label}
        </Text>
      )}
      {children}
    </View>
  )
}
