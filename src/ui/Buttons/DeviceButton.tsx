import { useAppTheme } from 'App'
import * as React from 'react'
import { Button } from 'react-native-paper'

type TProps = NoChildren & {
  name: string
  isSelected: boolean
  select: () => void
}

export const DeviceButton: React.FC<TProps> = ({
  name,
  isSelected,
  select,
}) => {
  const theme = useAppTheme()

  return (
    <Button
      theme={{
        colors: { primary: theme.colors.tertiary },
      }}
      style={{ width: `48%` }}
      mode={isSelected ? 'contained' : 'outlined'}
      onPress={select}
    >
      {name}
    </Button>
  )
}
