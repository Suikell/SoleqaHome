import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { ManualControlModal } from '~ui/Actuator/components/ManualControlModal'
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
    })
  }

  const setFavorite = () => {
    setFavoriteActuatorValue(actuator.id, !actuator.favorite)
  }

  const [visible, setVisible] = React.useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const currentState = actuator.manualOverride
    ? actuator.manualOverrideValue
    : actuator.currentState

  return (
    <DeviceCard
      isOnline={actuator.isOnline}
      onPress={onCardPress}
      label={actuator.name}
      favorite={actuator.favorite}
      setFavorite={setFavorite}
    >
      <Switch
        disabled={!actuator.isOnline}
        state={currentState}
        onChange={showModal}
      />
      <ManualControlModal
        visible={visible}
        hideModal={hideModal}
        actuatorId={actuator.id}
        currentState={currentState}
      />
    </DeviceCard>
  )
}
