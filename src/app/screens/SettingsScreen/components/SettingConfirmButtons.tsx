import * as React from 'react'
import { Button } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'

type TProps = NoChildren & {
  onConfirm: () => void
  onCancel: () => void
}

export const SettingConfirmButtons: React.FC<TProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <FlexRow justifyContent={`flex-end`}>
      <Button onPress={onConfirm}>Confirm</Button>
      <Button onPress={onCancel}>Cancel</Button>
    </FlexRow>
  )
}
