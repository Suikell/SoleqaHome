import { useAppTheme } from 'App'
import * as React from 'react'
import { TextInput } from 'react-native-paper'

type TProps = NoChildren & {
  label: PropsOf<typeof TextInput>['label']
  originalValue: PropsOf<typeof TextInput>['value']
  secureTextEntry?: PropsOf<typeof TextInput>['secureTextEntry']
  onEndEditing: (value: string) => void
  resetDependency?: boolean
}

export const SettingInput: React.FC<TProps> = ({
  label,
  originalValue,
  secureTextEntry,
  onEndEditing,
  resetDependency,
}) => {
  const theme = useAppTheme()
  const [value, setValue] = React.useState(originalValue || '')

  React.useEffect(() => {
    setValue(originalValue || '')
  }, [originalValue, resetDependency])

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      mode={`outlined`}
      label={label}
      value={value}
      onEndEditing={() => onEndEditing(value)}
      theme={{
        colors: {
          primary: theme.colors.tertiary,
        },
      }}
      onChangeText={(newValue) => setValue(newValue)}
    />
  )
}
