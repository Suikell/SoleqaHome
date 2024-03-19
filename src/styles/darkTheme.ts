import { COLORS } from './colors'

const DISABLED_COLOR = COLORS.mediumGrey

/**
 * Default dark theme colors.
 */
export const DARK_THEME = {
  bgColors: {
    primary: COLORS.almostBlack,

    card: COLORS.darkGrey,

    error: COLORS.red,
    // alert: COLORS.yellowLight,
    // info: COLORS.blueLight,
    // success: COLORS.greenLight,
  },

  fgColors: {
    placeholder: COLORS.lightGrey,
    // low: COLORS.g075,
    normal: COLORS.white,
    // high: COLORS.white,
  },

  activeColors: {
    // primary buttons, active elements, icons
    primary: {
      hover: COLORS.greenLight,
      normal: COLORS.greenContrast,
      disabled: DISABLED_COLOR,
    },
    // secondary buttons
    secondary: {
      hover: COLORS.greenContrast,
      normal: COLORS.greenLight,
      disabled: DISABLED_COLOR,
    },
  },
  specialColors: {
    info: COLORS.blue,
    error: COLORS.red,
    success: COLORS.greenLight,
    alert: COLORS.yellow,
  },
}
