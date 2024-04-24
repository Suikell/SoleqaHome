import * as React from 'react'
import { DataTable, Text } from 'react-native-paper'

import { TABLE_ROW_PADDING } from '~styles/spacing'
import { InputValueCell } from '~ui/Group/Table/InputValueCell'
import { RemoveItemCell } from '~ui/Group/Table/RemoveItemCell'
import { FlexRow } from '~ui/Layout/FlexRow'
import { useTableStyles } from '~utils/hooks/useTableStyles'

type TRemoveProps = OmitSafe<
  PropsOf<typeof RemoveItemCell>,
  'modalTextBehindName' | 'modalTitle' | 'children'
>

type TProps = NoChildren &
  TRemoveProps & {
    value: PropsOf<typeof InputValueCell>['value']
    operatorString: string
    linkComponent: React.ReactNode
  }

export const ConditionRow: React.FC<TProps> = ({
  value,
  operatorString,
  linkComponent,
  onRemove,
  name,
}) => {
  const styles = useTableStyles()

  return (
    <DataTable.Row>
      <DataTable.Cell style={[styles.flex2, styles.column]}>
        {linkComponent}
      </DataTable.Cell>
      <DataTable.Cell
        style={[
          styles.flex3,
          styles.center,
          styles.column,
          styles.verticalPadding,
        ]}
      >
        <FlexRow
          width={`100%`}
          justifyContent={`center`}
          paddingVertical={TABLE_ROW_PADDING}
        >
          <Text>{operatorString}</Text>
        </FlexRow>
      </DataTable.Cell>
      <InputValueCell value={value} />
      <RemoveItemCell
        name={name}
        onRemove={onRemove}
        modalTitle={`Remove condition`}
        modalTextBehindName={`condition from this group`}
      />
    </DataTable.Row>
  )
}
