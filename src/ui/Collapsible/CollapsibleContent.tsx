import React from 'react'
import { Pressable, ViewStyle } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { BUTTONS_GAP } from '~styles/spacing'
import { FlexRow } from '~ui/Layout/FlexRow'
import { useModalStyles } from '~utils/hooks/useModalStyles'

type TProps = RequiredChildren & {
  onCancel: () => void
  onConfirm: () => void
  title: string
  description?: string
  contentStyle?: {
    margin: ViewStyle['margin']
    borderRadius: ViewStyle['borderRadius']
  }
}

export const CollapsibleContent: React.FC<TProps> = ({
  title,
  description,
  onCancel,
  onConfirm,
  children,
  contentStyle,
}) => {
  const styles = useModalStyles()

  return (
    <Pressable
      style={[styles.modalContent, styles.color, contentStyle]}
      pointerEvents={`box-none`}
    >
      <Text variant={`titleLarge`}>{title}</Text>
      {description && <Text variant={`bodyMedium`}>{description}</Text>}

      {children}

      <FlexRow justifyContent={`flex-end`} gap={BUTTONS_GAP}>
        <Button mode={`contained`} onPress={onConfirm}>
          Confirm
        </Button>
        <Button onPress={onCancel}>Cancel</Button>
      </FlexRow>
    </Pressable>
  )
}
