import * as React from 'react'
import { Pressable, ScrollView, View } from 'react-native'

import { ActuatorValues } from '~screens/ActuatorDetailScreen/components/ActuatorValues'
import { ManualControl } from '~screens/ActuatorDetailScreen/components/ManualControl'
import { TriggerGroups } from '~screens/ActuatorDetailScreen/components/TriggerGroups'

type TManualControlProps = OmitSafe<PropsOf<typeof ManualControl>, 'children'>

type TProps = NoChildren & TManualControlProps

const contentPaddingForScroll = 450

export const ActuatorDetailContent: React.FC<TProps> = ({
  isManualControlOpen,
  setIsManualControlOpen,
}) => {
  return (
    <View>
      <ActuatorValues />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ManualControl
          isManualControlOpen={isManualControlOpen}
          setIsManualControlOpen={setIsManualControlOpen}
        />
        <Pressable
          pointerEvents={isManualControlOpen ? `none` : undefined}
          style={{ paddingBottom: contentPaddingForScroll }}
        >
          <TriggerGroups />
        </Pressable>
      </ScrollView>
    </View>
  )
}
