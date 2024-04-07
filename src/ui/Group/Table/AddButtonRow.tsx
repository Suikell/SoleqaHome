import { useAppTheme } from 'App'
import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { DataTable, Icon } from 'react-native-paper'

import { TABLE_ROW_PADDING } from '~styles/spacing'

type TProps = NoChildren & {
  onAdd: () => void
}

const TRANSPARENT = 'transparent'

export const AddButtonRow: React.FC<TProps> = ({ onAdd }) => {
  const theme = useAppTheme()

  const [rowColor, setRowColor] = React.useState(TRANSPARENT)

  return (
    <DataTable.Row
      style={{
        backgroundColor: rowColor,
        paddingVertical: TABLE_ROW_PADDING,
      }}
    >
      <Pressable
        onPressIn={() => setRowColor(theme.colors.onPressPrimary)}
        onPressOut={() => setRowColor(TRANSPARENT)}
        onPress={onAdd}
        style={styles.pressableRow}
      >
        <Icon source={`plus`} size={40} color={theme.colors.primary} />
      </Pressable>
    </DataTable.Row>
  )
}

const styles = StyleSheet.create({
  pressableRow: {
    width: `100%`,
    alignItems: `center`,
    justifyContent: `center`,
  },
})
