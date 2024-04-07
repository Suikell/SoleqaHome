import * as React from 'react'
import { DataTable } from 'react-native-paper'

import { useTableStyles } from '~utils/hooks/useTableStyles'

type TProps = NoChildren

export const ConditionHeader: React.FC<TProps> = () => {
  const styles = useTableStyles()

  return (
    <DataTable.Header>
      <DataTable.Title style={styles.flex2}>Device</DataTable.Title>
      <DataTable.Title style={[styles.flex3, styles.center, styles.column]}>
        Condition
      </DataTable.Title>
      <DataTable.Title style={[styles.flex2, styles.column, styles.center]}>
        Value
      </DataTable.Title>
      <DataTable.Title style={[styles.right, styles.flexHalf]}>
        {}
      </DataTable.Title>
    </DataTable.Header>
  )
}
