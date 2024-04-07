import { useAppTheme } from 'App'
import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { useActuatorDetailCtx } from '~screens/ActuatorDetailScreen/contexts/ActuatorDetailProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { getActuatorStateString } from '~ui/Actuator/helpers/getActuatorStateString'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const ActuatorValues: React.FC<TProps> = () => {
  const theme = useAppTheme()
  const { actuator } = useActuatorDetailCtx()

  const hasManualOverride = actuator.manualOverride
  const state = hasManualOverride
    ? actuator.manualOverrideValue
    : actuator.currentState
  return (
    <FlexRow justifyContent={`space-between`} margin={CONTENT_MARGIN}>
      <View>
        <Text variant={`displaySmall`} style={{ color: theme.colors.primary }}>
          {getActuatorStateString(state)}
        </Text>
        <FlexRow marginLeft={shrink(48)}>
          <Text>controlled by: </Text>
          <Text style={{ fontWeight: `700` }}>
            {getControlledByString(hasManualOverride)}
          </Text>
        </FlexRow>
      </View>
      <StatusInfo
        isOnline={actuator.isOnline}
        batteryLevel={actuator.batteryLevel}
      />
    </FlexRow>
  )
}

// * HELPERS

const getControlledByString = (manualOverride: boolean) => {
  return manualOverride ? 'manual' : 'groups'
}
