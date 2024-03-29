import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { ActuatorCard } from '~ui/Actuator/components/ActuatorCard'
import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TProps = {
  label?: Nullable<string>
  actuators?: Nullable<RoA<TFActuatorBase>>
  setFavoriteActuatorValue: PropsOf<
    typeof ActuatorCard
  >['setFavoriteActuatorValue']
}

export const ActuatorList: React.FC<TProps> = ({
  label,
  actuators,
  setFavoriteActuatorValue,
}) => {
  if (!isDefined(actuators) || actuators.length === 0) {
    return null
  }

  return (
    <>
      {label && <Text variant={`titleLarge`}>{label}</Text>}
      <View style={styles.sensors}>
        {actuators.map((actuator) => (
          <ActuatorCard
            key={actuator.id}
            actuator={actuator}
            setFavoriteActuatorValue={setFavoriteActuatorValue}
          />
        ))}
      </View>
    </>
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
