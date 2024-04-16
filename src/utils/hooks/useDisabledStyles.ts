import { TAppTheme } from 'App'
import { StyleSheet } from 'react-native'

import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

export const useDisabledStyles = () => {
  return useStylesWithTheme(styleCreator)
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    surface: {
      backgroundColor: theme.colors.surfaceDisabled,
    },
    onSurface: {
      color: theme.colors.onSurfaceDisabled,
    },
  })
