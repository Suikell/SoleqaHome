import * as React from 'react'
import { View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { Button, Text } from 'react-native-paper'

import { TActuator } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { CONTENT_MARGIN } from '~styles/spacing'
import { ManualControlContent } from '~ui/Actuator/components/ManualControlContent'
import { FlexRow } from '~ui/Layout/FlexRow'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  hasManualOverride: TActuator['manualOverride']
  isManualControlOpen: boolean
  setIsManualControlOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ManualControl: React.FC<TProps> = ({
  hasManualOverride = false,
  isManualControlOpen,
  setIsManualControlOpen,
}) => {
  return (
    <>
      {!isManualControlOpen && (
        <FlexRow margin={CONTENT_MARGIN} justifyContent={`space-between`}>
          <View>
            <Headline text={`Manual control:`} />
            <Text style={{ marginLeft: shrink(48) }}>
              Overrides trigger groups.
            </Text>
          </View>

          <Button onPress={() => setIsManualControlOpen(true)}>
            Turn {hasManualOverride ? 'off' : 'on'}
          </Button>
        </FlexRow>
      )}

      <Collapsible collapsed={!isManualControlOpen}>
        <ManualControlContent
          closeContent={() => setIsManualControlOpen(false)}
        />
      </Collapsible>
    </>
  )
}
