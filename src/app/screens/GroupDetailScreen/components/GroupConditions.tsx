import * as React from 'react'
import { View } from 'react-native'
import { DataTable } from 'react-native-paper'

import {
  ActuatorDetailLink,
  SensorDetailLink,
} from '~navigation/components/NavigationLink'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { useGroupDetailCtx } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { getActuatorStateString } from '~ui/Actuator/helpers/getActuatorStateString'
import {
  getActuatorOperatorString,
  getSensorOperatorString,
} from '~ui/Group/helpers/getOperatorString'
import { AddButtonRow } from '~ui/Group/Table/AddButtonRow'
import { ConditionHeader } from '~ui/Group/Table/ConditionHeader'
import { ConditionRow } from '~ui/Group/Table/ConditionRow'
import { Headline } from '~ui/Text/Headline'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'
import { useTableStyles } from '~utils/hooks/useTableStyles'

type TProps = NoChildren

export const GroupConditions: React.FC<TProps> = () => {
  const navigation = useNavigation()

  const styles = useTableStyles()

  const { group, removeActuatorCondition, removeSensorCondition } =
    useGroupDetailCtx()
  const { sensorConditions, actuatorConditions } = group

  return (
    <View style={styles.tableContainer}>
      <Headline text={`Conditions:`} />

      <DataTable>
        <ConditionHeader />

        {/* SENSOR CONDITIONS */}
        {sensorConditions.map((condition) => {
          const operatorString = getSensorOperatorString(condition.operator)
          return (
            <ConditionRow
              key={condition.id}
              value={condition.value}
              operatorString={operatorString}
              name={condition.sensor.name}
              onRemove={() => {
                removeSensorCondition(condition.id)
              }}
              linkComponent={
                <SensorDetailLink
                  sensorId={condition.sensor.id}
                  name={condition.sensor.name}
                >
                  {toCapitalizedLowerCase(condition.sensor.name)}
                </SensorDetailLink>
              }
              // type={`sensor`}
              // onConditionSelect={() => console.log('select click')}
            />
          )
        })}

        {/* ACTUATOR CONDITIONS */}
        {actuatorConditions.map((condition) => {
          const operatorString = getActuatorOperatorString(condition.operator)
          const stringValue = getActuatorStateString(condition.value)
          return (
            <ConditionRow
              key={condition.id}
              value={stringValue}
              operatorString={operatorString}
              name={condition.actuator.name}
              onRemove={() => {
                removeActuatorCondition(condition.id)
              }}
              linkComponent={
                <ActuatorDetailLink
                  actuatorId={condition.actuator.id}
                  name={condition.actuator.name}
                >
                  {toCapitalizedLowerCase(condition.actuator.name)}
                </ActuatorDetailLink>
              }
              // type={`actuator`}
              // onConditionSelect={() => console.log('select click')}
            />
          )
        })}

        {/* ADD BUTTON */}
        <AddButtonRow
          onAdd={() =>
            navigation.navigate('CreateCondition', {
              groupId: group.id,
            })
          }
        />
      </DataTable>
    </View>
  )
}
