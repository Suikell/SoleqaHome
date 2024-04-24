import { TAppTheme, useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { FlexRow } from '~ui/Layout/FlexRow'
import {
  getNumericKeyboardType,
  getTextNumber,
  isTextValid,
} from '~utils/helpers/numericKeyboardHelpers'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren

export const SensorValue: React.FC<TProps> = () => {
  const theme = useAppTheme()
  const keyboardType = getNumericKeyboardType()
  const styles = useStylesWithTheme(styleCreator)

  const { selectedDevice, sensorValue, setSensorValue } =
    useCreateConditionCtx()
  const originalValue = sensorValue ? sensorValue.toString() : ''

  const [inputValue, setInputValue] = React.useState(originalValue)

  return (
    <FlexRow margin={CONTENT_MARGIN}>
      <TextInput
        theme={{ colors: { primary: theme.colors.tertiary } }}
        style={{ width: `100%` }}
        value={inputValue}
        mode={`outlined`}
        maxLength={20}
        keyboardType={keyboardType}
        onChangeText={(text) => {
          const isValid = isTextValid(text)

          if (!isValid) {
            return
          }
          setInputValue(text)
        }}
        onEndEditing={() => {
          if (!inputValue) {
            setInputValue(originalValue)
          } else {
            const numberValue = getTextNumber(inputValue)

            setInputValue(numberValue.toString())
            setSensorValue(numberValue)
          }
        }}
      />
      <Text style={styles.unit}>{selectedDevice?.unit}</Text>
    </FlexRow>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    unit: {
      padding: shrink(16),
      right: 45,
      top: 3,
      color: theme.colors.tertiary,
    },
  })
