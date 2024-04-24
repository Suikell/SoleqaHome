import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

import { CONTENT_MARGIN } from '~styles/spacing'

type TProps = NoChildren & {
  onPress: () => void
}

export const CreateButton: React.FC<TProps> = ({ onPress }) => {
  const theme = useAppTheme()
  return (
    <FAB
      icon="plus"
      theme={{
        colors: {
          primaryContainer: theme.colors.primary,
          onPrimaryContainer: theme.colors.onPrimary,
        },
      }}
      variant={`primary`}
      label={'Confirm'}
      customSize={70}
      style={styles.fab}
      onPress={onPress}
    />
  )
}

const BUTTON_OFFSET_RIGHT = 8
const BUTTON_OFFSET_BOTTOM = 50

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: CONTENT_MARGIN,
    right: BUTTON_OFFSET_RIGHT,
    bottom: BUTTON_OFFSET_BOTTOM,
  },
})
