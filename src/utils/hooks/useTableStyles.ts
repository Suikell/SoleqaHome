import { TAppTheme } from 'App'
import { StyleSheet } from 'react-native'

import { CONTENT_MARGIN, TABLE_ROW_PADDING } from '~styles/spacing'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

export const useTableStyles = () => {
  return useStylesWithTheme(styleCreator)
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    tableContainer: {
      marginTop: CONTENT_MARGIN,
    },

    right: {
      justifyContent: `flex-end`,
    },
    column: {
      marginRight: 8,
    },

    defaultRow: {},
    flex2: {
      flex: 2,
    },
    flex3: {
      flex: 3,
    },
    flexHalf: {
      flex: 0.5,
    },
    center: {
      justifyContent: `center`,
    },
    verticalPadding: {
      paddingVertical: TABLE_ROW_PADDING,
    },
    input: {
      marginVertical: shrink(16),
      borderRadius: 8,
      borderColor: 'rgba(225, 227, 223, 0.38)',
      borderWidth: 1,
    },
    focusedInput: {
      borderWidth: 2,
      borderColor: theme.colors.tertiary,
    },
    textInput: {
      flex: 1,
      color: theme.colors.onBackground,
      height: `100%`,
      textAlign: `left`,
      textAlignVertical: `center`,
    },
  })
