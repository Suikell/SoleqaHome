import { useAppTheme } from 'App'
import * as React from 'react'
import { Pressable } from 'react-native'
import { Icon, TextInput } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  label: PropsOf<typeof TextInput>['label']
  outLineColor: PropsOf<typeof TextInput>['outlineColor']
  activeOutlineColor: PropsOf<typeof TextInput>['activeOutlineColor']
  value: Nullable<number>
  setKeyboardVisible: ReactSetState<boolean>
  onChangeValue: (value?: number) => void
}

export const GraphInput: React.FC<TProps> = ({
  value,
  label,
  outLineColor,
  activeOutlineColor,
  onChangeValue,
  setKeyboardVisible,
}) => {
  const theme = useAppTheme()
  const [inputValue, setInputValue] = React.useState<string | undefined>()
  const [iconColor, setIconColor] = React.useState(theme.colors.outline)

  React.useEffect(() => {
    const stringValue = value ? value.toString() : undefined

    setInputValue(stringValue)
  }, [value])

  return (
    <FlexRow>
      <TextInput
        style={{ width: `100%` }}
        label={label}
        value={inputValue}
        keyboardType={`numeric`}
        outlineColor={outLineColor}
        activeOutlineColor={activeOutlineColor}
        onTouchStart={() => {
          setKeyboardVisible(true)
        }}
        onChangeText={(text) => setInputValue(text)}
        onEndEditing={() => {
          if (!inputValue) {
            onChangeValue()
          } else {
            const withReplacedComma = inputValue.replace(',', '.')
            const numberValue = parseFloat(withReplacedComma)
            onChangeValue(numberValue)
          }
          setKeyboardVisible(false)
        }}
        mode={`outlined`}
      />
      <Pressable
        style={{
          padding: shrink(16),
          right: 45,
          top: 3,
        }}
        onPressIn={() => setIconColor(theme.colors.inverseSurface)}
        onPressOut={() => setIconColor(theme.colors.outline)}
        onPress={() => {
          setInputValue('')
          onChangeValue()
        }}
      >
        <Icon source={`close-circle-outline`} color={iconColor} size={28} />
      </Pressable>
    </FlexRow>
  )
}
