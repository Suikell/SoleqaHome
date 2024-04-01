import { formatDate } from 'date-fns'
import React from 'react'
import { Button } from 'react-native-paper'
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates'

import { FlexRow } from '~ui/Layout/FlexRow'

type TOnConfirmTime = PropsOf<typeof TimePickerModal>['onConfirm']
type TTime = PropsOf<TOnConfirmTime>

type TProps = NoChildren & {
  originalDate?: Date
  title?: React.ReactNode
  showTime?: boolean
  validDateRange?: PropsOf<typeof DatePickerModal>['validRange']
  onSetDate: (date: Date) => void
}
export const DateTimePicker: React.FC<TProps> = ({
  originalDate,
  title,
  onSetDate,
  showTime = false,
  validDateRange,
}) => {
  const [openDatePicker, setOpenDatePicker] = React.useState(false)
  const [openTimePicker, setOpenTimePicker] = React.useState(false)

  const now = originalDate || new Date()

  const currentHours = Number(formatDate(now, 'HH'))
  const currentMinutes = Number(formatDate(now, 'mm'))

  const [date, setDate] = React.useState<Date>(now)
  const [time, setTime] = React.useState<TTime>({
    hours: currentHours,
    minutes: currentMinutes,
  })

  React.useEffect(() => {
    if (!originalDate) return

    const hours = Number(formatDate(originalDate, 'HH'))
    const minutes = Number(formatDate(originalDate, 'mm'))

    setDate(originalDate)
    setTime({
      hours,
      minutes,
    })
  }, [originalDate])

  React.useEffect(() => {
    if (!showTime) {
      const newNow = new Date()
      const hours = Number(formatDate(newNow, 'HH'))
      const minutes = Number(formatDate(newNow, 'mm'))
      date.setHours(hours, minutes)
    } else {
      date.setHours(time.hours, time.minutes)
    }
    onSetDate(date)
  }, [time, date, onSetDate, showTime])

  return (
    <>
      <FlexRow justifyContent={`space-between`}>
        {title}
        <FlexRow>
          <Button
            onPress={() => {
              setOpenDatePicker(true)
            }}
          >
            {formatDate(date, 'dd.MM.yyyy')}
          </Button>
          {showTime && (
            <Button
              onPress={() => {
                setOpenTimePicker(true)
              }}
            >
              {`${time.hours}:${String(time.minutes).padStart(2, '0')}`}
            </Button>
          )}
        </FlexRow>
      </FlexRow>

      <DatePickerModal
        locale="cs"
        mode="single"
        date={date}
        visible={openDatePicker}
        validRange={validDateRange}
        onConfirm={({ date }) => {
          if (date) {
            setDate(date)
          }
          setOpenDatePicker(false)
        }}
        onDismiss={() => setOpenDatePicker(false)}
      />

      {showTime && (
        <TimePickerModal
          visible={openTimePicker}
          locale="en"
          onDismiss={() => setOpenTimePicker(false)}
          onConfirm={(time) => {
            setTime(time)
            setOpenTimePicker(false)
          }}
          use24HourClock
        />
      )}
    </>
  )
}
