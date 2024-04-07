import * as React from 'react'
import { Pressable, View } from 'react-native'

import { ActuatorValues } from '~screens/ActuatorDetailScreen/components/ActuatorValues'
import { ManualControl } from '~screens/ActuatorDetailScreen/components/ManualControl'
import { TriggerGroups } from '~screens/ActuatorDetailScreen/components/TriggerGroups'

type TManualControlProps = OmitSafe<PropsOf<typeof ManualControl>, 'children'>

type TProps = NoChildren & TManualControlProps

export const ActuatorDetailContent: React.FC<TProps> = ({
  isManualControlOpen,
  setIsManualControlOpen,
}) => {
  return (
    <View>
      <ActuatorValues />
      <ManualControl
        isManualControlOpen={isManualControlOpen}
        setIsManualControlOpen={setIsManualControlOpen}
      />
      <Pressable pointerEvents={isManualControlOpen ? `none` : undefined}>
        <TriggerGroups />
      </Pressable>
    </View>
  )
}
