import * as React from 'react'
import { View } from 'react-native'
import { DataTable, Switch } from 'react-native-paper'

import { ActuatorDetailLink } from '~navigation/components/NavigationLink'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { useGroupDetailCtx } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { AddButtonRow } from '~ui/Group/Table/AddButtonRow'
import { RemoveItemCell } from '~ui/Group/Table/RemoveItemCell'
import { Headline } from '~ui/Text/Headline'
import { useTableStyles } from '~utils/hooks/useTableStyles'

type TProps = NoChildren
export const ControlledActuators: React.FC<TProps> = () => {
  const navigation = useNavigation()
  const styles = useTableStyles()

  const { group, removeActuatorFromGroup, setActuatorChangeToState } =
    useGroupDetailCtx()

  return (
    <View style={styles.tableContainer}>
      <Headline text={`Controlled actuators:`} />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.flex3}>Actuator</DataTable.Title>
          <DataTable.Title style={[styles.flex2, styles.column, styles.center]}>
            Change to
          </DataTable.Title>
          <DataTable.Title style={[styles.right, styles.flexHalf]}>
            {}
          </DataTable.Title>
        </DataTable.Header>

        {group.controlledActuators.map(({ changeToState, actuator }) => {
          return (
            <DataTable.Row key={actuator.id}>
              <DataTable.Cell style={[styles.flex3, styles.verticalPadding]}>
                <ActuatorDetailLink
                  actuatorId={actuator.id}
                  name={actuator.name}
                >
                  {actuator.name}
                </ActuatorDetailLink>
              </DataTable.Cell>
              <DataTable.Cell
                style={[styles.flex2, styles.center, styles.column]}
              >
                <Switch
                  value={changeToState}
                  onValueChange={(state) => {
                    setActuatorChangeToState(group.id, actuator.id, state)
                  }}
                />
              </DataTable.Cell>
              <RemoveItemCell
                modalTitle={'Remove controlled actuator'}
                modalTextBehindName={`actuator from being controlled by this group`}
                name={actuator.name}
                onRemove={() => {
                  removeActuatorFromGroup(group.id, actuator.id)
                }}
              />
            </DataTable.Row>
          )
        })}
        <AddButtonRow
          onAdd={() => {
            navigation.navigate('AddControlledActuator', {
              groupId: group.id,
              controlledActuators: group.controlledActuators.map(
                ({ actuator }) => actuator.id,
              ),
            })
          }}
        />
      </DataTable>
    </View>
  )
}
