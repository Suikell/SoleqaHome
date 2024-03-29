import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { AddGroupButton } from '~ui/Group/AddGroupButton'
import { GroupCard } from '~ui/Group/GroupCard'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

const groups = [
  {
    id: 1,
    name: 'Turn on heater',
    active: true,
    priority: 1,
    sensorConditions: [
      {
        id: 1,
        active: true,
        sensor: {
          id: 1,
          name: 'Temperature',
        },
      },
      {
        id: 2,
        active: true,
        sensor: {
          id: 2,
          name: 'Water level',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Pump water',
    priority: 2,
    active: false,
    sensorConditions: [
      {
        id: 2,
        active: true,
        sensor: {
          id: 2,
          name: 'Water level',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'Ventilate',
    active: true,
    priority: undefined,
    sensorConditions: [
      {
        id: 3,
        active: false,
        sensor: {
          id: 3,
          name: 'CO2',
        },
      },
    ],
  },
]

export const GroupsList: React.FC<TProps> = () => {
  return (
    <View style={styles.sensors}>
      <AddGroupButton />
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  sensors: {
    flexDirection: `row`,
    rowGap: shrink(48),
    flexWrap: 'wrap',
    justifyContent: `space-between`,
  },
})
