import * as React from 'react'
import { View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { Button, Text } from 'react-native-paper'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TActuator } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { CONTENT_MARGIN } from '~styles/spacing'
import { ManualControlContent } from '~ui/Actuator/components/ManualControlContent'
import { FlexRow } from '~ui/Layout/FlexRow'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'

type TManualControlContentProps = Pick<
  PropsOf<typeof ManualControlContent>,
  'actuatorId' | 'currentState'
>
type TProps = NoChildren &
  TManualControlContentProps & {
    hasManualOverride: TActuator['manualOverride']
    isManualControlOpen: boolean
    setIsManualControlOpen: React.Dispatch<React.SetStateAction<boolean>>
  }

export const ManualControl: React.FC<TProps> = ({
  actuatorId,
  currentState,
  hasManualOverride = false,
  isManualControlOpen,
  setIsManualControlOpen,
}) => {
  const { cancelManualOverride } = useCategoriesUpdatersCtx()
  const isCollapsed = !isManualControlOpen

  const onTurnOnOff = React.useCallback(() => {
    // turn off
    if (hasManualOverride) {
      cancelManualOverride(actuatorId)
      return
    }
    // turn on
    setIsManualControlOpen(true)
  }, [
    actuatorId,
    cancelManualOverride,
    hasManualOverride,
    setIsManualControlOpen,
  ])

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

          <Button onPress={onTurnOnOff}>
            Turn {hasManualOverride ? 'off' : 'on'}
          </Button>
        </FlexRow>
      )}

      <Collapsible collapsed={isCollapsed}>
        <ManualControlContent
          isClosed={isCollapsed}
          actuatorId={actuatorId}
          currentState={currentState}
          closeContent={() => setIsManualControlOpen(false)}
        />
      </Collapsible>
    </>
  )
}
