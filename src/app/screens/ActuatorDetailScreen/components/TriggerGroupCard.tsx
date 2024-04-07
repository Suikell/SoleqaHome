import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TFTriggerGroup } from '~graphql/generated/graphql'
import { PriorityBadge } from '~screens/ActuatorDetailScreen/components/PriorityBadge'
import { useActuatorDetailCtx } from '~screens/ActuatorDetailScreen/contexts/ActuatorDetailProvider'
import { getActuatorStateString } from '~ui/Actuator/helpers/getActuatorStateString'
import { CardLabel } from '~ui/Group/GroupCard/CardLabel'
import { GroupCardContainer } from '~ui/Group/GroupCard/GroupCardContainer'
import { GroupCardDescription } from '~ui/Group/GroupCard/GroupCardDescription'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  priority: number
  triggerGroup: TFTriggerGroup
}

export const TriggerGroupCard: React.FC<TProps> = ({
  priority,
  triggerGroup,
}) => {
  const { actuator } = useActuatorDetailCtx()
  const { group, changeToState } = triggerGroup
  const { actuatorConditions, sensorConditions } = group

  const hasActuatorConditions = actuatorConditions.length > 0
  const hasSensorConditions = sensorConditions.length > 0

  const hasConditions = hasActuatorConditions || hasSensorConditions

  return (
    <GroupCardContainer
      groupId={group.id}
      name={group.name}
      rightAction={
        <PriorityBadge
          groupId={group.id}
          actuatorId={actuator.id}
          groupName={group.name}
          actuatorName={actuator.name}
          priority={priority}
          maxPriority={actuator.groups.length}
        />
      }
      cardStyle={styles.card}
    >
      <View style={styles.content}>
        <FlexRow maxWidth={`100%`} justifyContent={`space-between`}>
          <View style={{ maxWidth: `80%` }}>
            <CardLabel label={`Changes actuator to:`} />
          </View>
          <Text variant={`titleLarge`}>
            {getActuatorStateString(changeToState)}
          </Text>
        </FlexRow>
      </View>

      {hasConditions && (
        <GroupCardDescription label={`Depends on:`}>
          {sensorConditions.map((item, index) => {
            if (
              !hasActuatorConditions &&
              sensorConditions.length === index + 1
            ) {
              return <Text key={item.id}>{item.sensor.name}</Text>
            }
            return <Text key={item.id}>{`${item.sensor.name}, `}</Text>
          })}
          {actuatorConditions.map((item, index) => {
            if (actuatorConditions.length === index + 1) {
              return <Text key={item.id}>{item.actuator.name}</Text>
            }
            return <Text key={item.id}>{`${item.actuator.name}, `}</Text>
          })}
        </GroupCardDescription>
      )}
    </GroupCardContainer>
  )
}

const contentSpacing = shrink(48)

const styles = StyleSheet.create({
  content: {
    marginHorizontal: contentSpacing,
    marginBottom: shrink(20),
  },
  card: {
    overflow: `visible`,
  },
})
