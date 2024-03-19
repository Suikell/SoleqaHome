import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { ActuatorCard } from '~ui/Actuator/components/ActuatorCard'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TProps = {
  actuators?: RoA<TFActuatorBase>
}

export const ActuatorList: React.FC<TProps> = ({ actuators }) => {
  if (!isDefined(actuators) || actuators.length === 0) {
    return null
  }

  return (
    <View style={styles.sensors}>
      {actuators.map((actuator) => (
        <ActuatorCard key={actuator.id} actuator={actuator} />
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
