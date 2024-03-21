import { useAppTheme } from 'App'
import * as React from 'react'
import { Icon, Text } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = {
  isOnline?: Nullable<boolean>
}

export const Online: React.FC<TProps> = ({ isOnline }) => {
  const theme = useAppTheme()

  const stateText = isOnline ? `online` : `offline`
  const color = isOnline ? theme.colors.primary : theme.colors.error
  return (
    <FlexRow justifyContent={`space-between`} paddingRight={shrink(8)}>
      <Text variant={`titleMedium`}>{stateText}</Text>
      <Icon size={20} source={`checkbox-blank-circle`} color={color} />
    </FlexRow>
  )
}
