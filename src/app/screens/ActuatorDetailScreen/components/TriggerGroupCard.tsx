import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import { TFTriggerGroup } from '~graphql/generated/graphql'
import { GroupCardContainer } from '~ui/Group/GroupCard/GroupCardContainer'
import { GroupCardDescription } from '~ui/Group/GroupCard/GroupCardDescription'
import { Switch } from '~ui/Switch/Switch'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren & {
  triggerGroup: TFTriggerGroup
}

export const TriggerGroupCard: React.FC<TProps> = ({ triggerGroup }) => {
  const { group, changeToState, priority } = triggerGroup
  const { actuatorConditions, sensorConditions } = group

  const hasActuatorConditions = actuatorConditions.length > 0
  const hasSensorConditions = sensorConditions.length > 0

  const hasConditions = hasActuatorConditions || hasSensorConditions

  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const styles = useStylesWithTheme(styleCreator)

  return (
    <GroupCardContainer groupId={group.id} name={group.name}>
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

      <Switch
        label={`active`}
        state={group.active}
        onChange={() => showModal()}
      />
    </GroupCardContainer>
  )
}

const titleSpacing = shrink(32)
const contentSpacing = shrink(48)

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    title: {
      marginTop: titleSpacing,
      // paddingRight: titleSpacing,
      marginBottom: shrink(16),
    },
    label: {
      color: theme.colors.tertiary,
    },
    content: {
      marginHorizontal: contentSpacing,
      marginBottom: shrink(20),
    },
  })
