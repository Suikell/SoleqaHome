import { useAppTheme } from 'App'
import * as React from 'react'
import { Text } from 'react-native-paper'

type TProps = NoChildren & {
  text: string
}

export const Headline: React.FC<TProps> = ({ text }) => {
  const theme = useAppTheme()

  return (
    <Text variant={`bodyLarge`} style={{ color: theme.colors.tertiary }}>
      {text}
    </Text>
  )
}
