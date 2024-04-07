import React from 'react'
import { Snackbar, Switch, Text } from 'react-native-paper'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { CollapsibleContent } from '~ui/Collapsible/CollapsibleContent'
import { DateTimePicker } from '~ui/DateTimePicker/DateTimePicker'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TCollapsibleContent = PropsOf<typeof CollapsibleContent>
type TCollapsibleContentProps = Pick<TCollapsibleContent, 'contentStyle'>
type TProps = NoChildren &
  TCollapsibleContentProps & {
    actuatorId: ID
    currentState: TFActuatorBase['currentState']
    closeContent: () => void
    isClosed?: boolean
  }

const DESCRIPTION = `When the state is changed manually it overrides trigger groups. The
actuator state stays set based on this setting even when trigger
conditions are met.`

export const ManualControlContent: React.FC<TProps> = ({
  actuatorId,
  isClosed: isCollapsed,
  currentState,
  closeContent,
  contentStyle,
}) => {
  const currentDate = new Date()

  const { setManualOverride } = useCategoriesUpdatersCtx()
  const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false)
  const [state, setState] = React.useState(!currentState)

  const [selectedDateTime, setSelectedDateTime] =
    React.useState<Date>(currentDate)

  React.useEffect(() => {
    setIsSnackbarVisible(false)
  }, [isCollapsed])

  const onConfirm = React.useCallback(() => {
    const newDate = new Date()
    // As some operations are asynchronous, it's sometimes a bit wrong
    // To avoid this, we add 2 minutes from the current time to create some tolerance
    newDate.setMinutes(newDate.getMinutes() + 10)

    if (newDate > selectedDateTime) {
      setIsSnackbarVisible(true)
      return
    }

    setManualOverride(actuatorId, state, selectedDateTime)
    closeContent()
  }, [actuatorId, closeContent, selectedDateTime, setManualOverride, state])

  return (
    <>
      <CollapsibleContent
        title={`Manual control`}
        description={DESCRIPTION}
        onConfirm={onConfirm}
        onCancel={closeContent}
        contentStyle={contentStyle}
      >
        <FlexRow marginTop={shrink(16)} justifyContent={`space-between`}>
          <Text variant={`titleMedium`}>Actuator state should be:</Text>
          <Switch value={state} onChange={() => setState(!state)} />
        </FlexRow>

        <DateTimePicker
          title={<Text variant={`titleMedium`}>Turn on until:</Text>}
          validDateRange={{
            startDate: new Date(),
          }}
          showTime
          onSetDate={(date) => setSelectedDateTime(date)}
        />
      </CollapsibleContent>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        action={{
          label: 'Ok',
        }}
      >
        Time selection must be at least 10 minutes in the future!
      </Snackbar>
    </>
  )
}
