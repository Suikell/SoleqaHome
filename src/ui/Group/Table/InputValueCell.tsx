import * as React from 'react'
import { DataTable, Text } from 'react-native-paper'

import { useTableStyles } from '~utils/hooks/useTableStyles'

type TProps = NoChildren & {
  value: string | number
  // type: 'sensor' | 'actuator'
}

export const InputValueCell: React.FC<TProps> = ({ value }) => {
  const styles = useTableStyles()

  // const [isFocused, setIsFocused] = React.useState(false)

  // const isSensor = type === 'sensor'
  // const isActuator = type === 'actuator'

  // const stringValue = value.toString()
  // TODO add unit at the end of the value
  return (
    <DataTable.Cell
      style={[
        styles.flex2,
        styles.center,
        styles.column,
        // styles.input,
        // isFocused && styles.focusedInput,
      ]}
    >
      <Text>{value}</Text>
      {/* <FlexRow
        paddingHorizontal={shrink(16)}
        width={`100%`}
        justifyContent={`space-between`}
        gap={shrink(8)}
      >
        {isSensor && (
          <SensorConditionValue
            setIsFocused={setIsFocused}
            value={stringValue}
          />
        )}
        {isActuator && (
          <ActuatorConditionValue
            onChangeValue={(v) => console.log(v)}
            setIsFocused={setIsFocused}
            value={stringValue}
          />
        )}
      </FlexRow> */}
    </DataTable.Cell>
  )
}
