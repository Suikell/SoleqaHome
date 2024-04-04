import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { DeviceCard } from '~ui/Cards/DeviceCard'
import { Switch } from '~ui/Switch/Switch'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = NoChildren & {
  actuator: TFActuatorBase
}

export const ActuatorCard: React.FC<TProps> = ({ actuator }) => {
  const navigation = useNavigation()
  const { setFavoriteActuatorValue } = useCategoriesUpdatersCtx()

  const onCardPress = () => {
    if (!isDefined(actuator.currentState)) return null

    navigation.navigate('ActuatorDetail', {
      actuatorId: actuator.id,
      name: actuator.name,
      state: actuator.currentState,
    })
  }

  const setFavorite = () => {
    setFavoriteActuatorValue(actuator.id, !actuator.favorite)
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
