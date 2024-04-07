import React from 'react'
import { Snackbar, Text } from 'react-native-paper'

import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { CollapsibleContent } from '~ui/Collapsible/CollapsibleContent'
import { DateTimePicker } from '~ui/DateTimePicker/DateTimePicker'

type TProps = NoChildren & {
  closeContent: () => void
  isCollapsed?: boolean
}

const DESCRIPTION = `Choose an end date and time, and the system will retrieve average historical data up to the selected date. The range is dynamically adjusted based on the period you've selected above.`

export const OverlayControlContent: React.FC<TProps> = ({
  isCollapsed,
  closeContent,
}) => {
  const { selectedPeriod, overlayDateTime } = useGraphValuesCtx()
  const { setIsOverlayVisible, setOverlayDateTime } = useGraphControlCtx()

  const shouldChooseTime = React.useMemo(
    () => selectedPeriod === 'HOUR',
    [selectedPeriod],
  )

  const [isSnackbarVisible, setIsSnackbarVisible] = React.useState(false)

  const currentDate = new Date()
  const [selectedDateTime, setSelectedDateTime] =
    React.useState<Date>(currentDate)

  React.useEffect(() => {
    setIsSnackbarVisible(false)
  }, [isCollapsed])

  const onConfirm = React.useCallback(() => {
    const newDate = new Date()
    // As some operations are asynchronous, it's sometimes a bit wrong
    // To avoid this, we add 2 minutes from the current time to create some tolerance
    newDate.setMinutes(newDate.getMinutes() + 2)

    if (newDate < selectedDateTime) {
      setIsSnackbarVisible(true)
      return
    }

    setOverlayDateTime(selectedDateTime)
    setIsOverlayVisible(true)
    closeContent()
  }, [closeContent, selectedDateTime, setIsOverlayVisible, setOverlayDateTime])

  return (
    <>
      <CollapsibleContent
        title={`Period overlay`}
        description={DESCRIPTION}
        onConfirm={onConfirm}
        onCancel={() => {
          setIsSnackbarVisible(false)
          closeContent()
        }}
      >
        <DateTimePicker
          originalDate={overlayDateTime}
          showTime={shouldChooseTime}
          title={<Text>Set date{shouldChooseTime ? ` time:` : `:`}</Text>}
          validDateRange={{
            endDate: currentDate,
          }}
          onSetDate={(date) => {
            setSelectedDateTime(date)
          }}
        />
      </CollapsibleContent>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        action={{
          label: 'Ok',
        }}
      >
        Time selection must not exceed the current moment!
      </Snackbar>
    </>
  )
}
