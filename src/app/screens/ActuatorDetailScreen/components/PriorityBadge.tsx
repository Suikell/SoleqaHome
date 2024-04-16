import { useAppTheme } from 'App'
import * as React from 'react'
import { Pressable, ScrollView } from 'react-native'
import { Avatar, SegmentedButtons, Text } from 'react-native-paper'

import { useActuatorUpdaters } from '~screens/ActuatorDetailScreen/hooks/useActuatorUpdaters'
import { ConfirmModal } from '~ui/Layout/ConfirmModal'
import { EmphasisText } from '~ui/Layout/EmphasisText'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = NoChildren & {
  maxPriority: number
  priority?: number
  groupName: string
  groupId: ID
  actuatorId: ID
  actuatorName: string
}

export const PriorityBadge: React.FC<TProps> = ({
  maxPriority,
  groupName,
  groupId,
  actuatorId,
  actuatorName,
  priority,
}) => {
  const { setActuatorPriority, success } = useActuatorUpdaters()

  const theme = useAppTheme()
  const priorityText = priority?.toString() ?? `-`
  const [visible, setVisible] = React.useState(false)

  const [selectedPriority, setSelectedPriority] = React.useState(
    priority?.toString() || '',
  )

  React.useEffect(() => {
    setSelectedPriority(priority?.toString() || '')
  }, [priority])

  const onConfirm = React.useCallback(() => {
    setActuatorPriority(groupId, actuatorId, Number(selectedPriority))

    if (isDefined(success)) {
      setVisible(false)
    }
  }, [actuatorId, groupId, selectedPriority, setActuatorPriority, success])

  return (
    <>
      <Pressable
        style={{ padding: 8, bottom: 10, left: 10 }}
        onPress={() => setVisible(true)}
      >
        <Avatar.Text
          size={30}
          theme={{
            colors: {
              primary: visible
                ? theme.colors.primaryContainer
                : theme.colors.primary,
            },
          }}
          labelStyle={{ fontSize: 14, fontWeight: `bold` }}
          label={priorityText}
        />
      </Pressable>

      <ConfirmModal
        visible={visible}
        hideModal={() => setVisible(false)}
        onConfirm={onConfirm}
        title={'Priority change'}
      >
        <Text variant={`bodyMedium`}>
          Do you want to change priority of{` `}
          <EmphasisText>{groupName}</EmphasisText> group for this{' '}
          <EmphasisText>{actuatorName}</EmphasisText> actuator?
        </Text>

        <ScrollView
          style={{ maxHeight: 40 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <SegmentedButtons
            theme={{
              colors: {
                secondaryContainer: theme.colors.primary,
                onSecondaryContainer: theme.colors.surfaceVariant,
              },
            }}
            onValueChange={(value) => setSelectedPriority(value)}
            value={selectedPriority?.toString() ?? ``}
            buttons={getPriorities(maxPriority)}
          />
        </ScrollView>
        <Text
          variant={`bodyMedium`}
          style={{ color: theme.colors.onSurfaceVariant }}
        >
          When you select a priority that is already assigned, this actuator
          will be given that priority. Consequently, all subsequent actuators
          will have their priority adjusted by one level, either increased or
          decreased, to maintain the priority order.
        </Text>
      </ConfirmModal>
    </>
  )
}

const getPriorities = (maxPriority: number) => {
  return Array.from({ length: maxPriority }, (_, i) => {
    const stringValue = (i + 1).toString()
    return {
      label: stringValue,
      value: stringValue,
    }
  })
}
