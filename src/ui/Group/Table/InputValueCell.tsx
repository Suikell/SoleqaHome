import * as React from 'react'
import { DataTable, Text } from 'react-native-paper'

import { useTableStyles } from '~utils/hooks/useTableStyles'

type TProps = NoChildren & {
  value: string | number
}

export const InputValueCell: React.FC<TProps> = ({ value }) => {
  const styles = useTableStyles()

  // TODO add unit at the end of the value
  return (
    <DataTable.Cell style={[styles.flex2, styles.center, styles.column]}>
      <Text>{value}</Text>
    </DataTable.Cell>
  )
}
