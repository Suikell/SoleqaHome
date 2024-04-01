import { TAppTheme, useAppTheme } from 'App'

type TStyleCreator<TStyles> = (theme: TAppTheme) => TStyles

/**
 * Hook to use styles with the app theme.
 */
export const useStylesWithTheme = <TStyles>(
  stylesCreator: TStyleCreator<TStyles>,
) => {
  const theme = useAppTheme()

  return stylesCreator(theme)
}
