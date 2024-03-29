import { formatDate } from 'date-fns'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates'

import { FlexRow } from '~ui/Layout/FlexRow'

export const DateTimePicker = () => {
  const [openDatePicker, setOpenDatePicker] = React.useState(false)
  const [openTimePicker, setOpenTimePicker] = React.useState(false)

  const now = new Date()

  const currentDate = formatDate(now, 'dd.MM.yyyy')
  const currentTime = formatDate(now, 'HH:mm')

  const [endDate, setEndDate] = React.useState<string>(currentDate)
  const [endTime, setEndTime] = React.useState<string>(currentTime)

  console.log('endDate', endDate)
  console.log('endTime', endTime)
  return (
    <>
      <FlexRow justifyContent={`space-between`}>
        <Text variant={`titleMedium`}>Turn on until:</Text>

        <FlexRow>
          <Button
            onPress={() => {
              setOpenDatePicker(true)
            }}
          >
            {currentDate}
          </Button>
          <Button
            onPress={() => {
              setOpenTimePicker(true)
            }}
          >
            {currentTime}
          </Button>
        </FlexRow>
      </FlexRow>

      <DatePickerModal
        locale="cs"
        mode="single"
        visible={openDatePicker}
        validRange={{
          startDate: now,
        }}
        onConfirm={({ date }) => {
          if (date) {
            const dateString = date.toDateString()
            const formattedDate = formatDate(dateString, 'dd.MM.yyyy')
            setEndDate(formattedDate)
          }
          setOpenDatePicker(false)
        }}
        onDismiss={() => setOpenDatePicker(false)}
      />

      <TimePickerModal
        visible={openTimePicker}
        locale="en"
        onDismiss={() => setOpenTimePicker(false)}
        onConfirm={({ hours, minutes }) => {
          if (hours && minutes) {
            const formattedTime = `${hours}:${minutes}`
            setEndTime(formattedTime)
          }
          setOpenTimePicker(false)
        }}
        use24HourClock
      />
    </>
  )
}
