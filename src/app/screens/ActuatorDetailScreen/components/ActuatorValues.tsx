import { useAppTheme } from 'App'
import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { TActuator } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { CONTENT_MARGIN } from '~styles/spacing'
import { getActuatorStateString } from '~ui/Actuator/helpers/getActuatorStateString'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  currentState: TActuator['currentState']
  isOnline: TActuator['isOnline']
  batteryLevel: TActuator['batteryLevel']
  hasManualOverride: TActuator['manualOverride']
  manualOverrideValue: TActuator['manualOverrideValue']
}

export const ActuatorValues: React.FC<TProps> = ({
  currentState,
  isOnline,
  batteryLevel,
  hasManualOverride,
  manualOverrideValue,
}) => {
  const theme = useAppTheme()

  const state = hasManualOverride ? manualOverrideValue : currentState
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
      <StatusInfo isOnline={isOnline} batteryLevel={batteryLevel} />
    </FlexRow>
  )
}

// * HELPERS

const getControlledByString = (manualOverride: boolean) => {
  return manualOverride ? 'manual' : 'groups'
}
