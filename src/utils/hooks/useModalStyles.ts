import { TAppTheme } from 'App'
import { StyleSheet } from 'react-native'

import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

// For some reason Modal component didn't display over whole screen,
// so there is at least some styling for it
export const useModalStyles = () => {
  return useStylesWithTheme(styleCreator)
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backdrop,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    modal: {
      margin: 20,
      borderRadius: 16,
    },
    color: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    modalContent: {
      padding: shrink(60),
      gap: shrink(48),
    },
  })
