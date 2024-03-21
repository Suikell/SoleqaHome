import * as React from 'react'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { DeviceCard } from '~ui/Cards/DeviceCard'
import { Switch } from '~ui/Switch/Switch'

type TProps = NoChildren & {
  actuator: TFActuatorBase
  setFavoriteActuatorValue: (
    actuator: TFActuatorBase,
    favorite: boolean,
  ) => void
}

export const ActuatorCard: React.FC<TProps> = ({
  actuator,
  setFavoriteActuatorValue,
}) => {
  const navigation = useNavigation()

  const onCardPress = () => {
    if (!actuator.id || !actuator.name || !actuator.currentState) return null

    navigation.navigate('ActuatorDetail', {
      actuatorId: actuator.id,
      name: actuator.name,
      state: actuator.currentState,
    })
  }

  const setFavorite = () => {
    setFavoriteActuatorValue(actuator, !actuator.favorite)
  }

  return (
    <DeviceCard
      onPress={onCardPress}
      label={actuator.name}
      favorite={actuator.favorite}
      setFavorite={setFavorite}
    >
      <Switch state={actuator.currentState} />
    </DeviceCard>
  )
}
