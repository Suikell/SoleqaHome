import { useTheme } from 'react-native-paper'

//
// * --- color system enum types ---
//

/**
 * color shades – used to pair dark bg to light fg colors and vice versa
 */
export type TColorShade = 'light' | 'dark'
/**
 * levels of contrast for fg colors
 */
export type TContrastLevel = 'placeholder' | 'low' | 'normal' | 'high'
/**
 * possible states of active elements (buttons, inputs, form elements, ...)
 */
export type TElementState = 'hover' | 'normal' | 'disabled'

//
// * --- theme-based types ---
//

/**
 * shape of the `theme` object,
 * includes all BG colors used throughout the app
 */
export type TTheme = ReturnType<typeof useTheme>
