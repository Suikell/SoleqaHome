import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { Card } from '~ui/Cards/Card'
import { PriorityBadge } from '~ui/Group/PriorityBadge'
import { Switch } from '~ui/Switch/Switch'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TGroup = {
  id: number
  name: string
  active: boolean
  priority: number | undefined
  sensorConditions: {
    id: number
    active: boolean
    sensor: {
      id: number
      name: string
    }
  }[]
}
type TProps = NoChildren & {
  showPriority?: boolean
  group?: TGroup
}

export const GroupCard: React.FC<TProps> = ({
  showPriority = false,
  group,
}) => {
  const priorityBadge = React.useMemo(() => {
    if (!showPriority || !isDefined(group)) return null
    return <PriorityBadge priority={group.priority} />
  }, [group, showPriority])

  if (!isDefined(group)) return null

  return (
    <Card
      title={group.name}
      titleStyle={styles.title}
      rightAction={priorityBadge}
    >
      <View style={styles.content}>
        <View>
          {/* <Text variant={`bodySmall`}>Depends on:</Text> */}
          <Text variant={`bodySmall`}>
            {group.sensorConditions.map((condition, index) => {
              if (group.sensorConditions.length === index + 1) {
                return condition.sensor.name
              }
              return `${condition.sensor.name}, `
            })}
          </Text>
        </View>
      </View>
      <Switch state={group.active} />
    </Card>
  )
}

const titleSpacing = shrink(32)
const contentSpacing = shrink(48)

const styles = StyleSheet.create({
  title: {
    marginVertical: titleSpacing,
    // paddingRight: titleSpacing,
  },
  content: {
    marginHorizontal: contentSpacing,
    marginBottom: shrink(16),
  },
})
