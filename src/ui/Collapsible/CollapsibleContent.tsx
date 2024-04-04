import { TAppTheme } from 'App'
import React from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

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
  const styles = useStylesWithTheme(styleCreator)

  return (
    <Pressable style={[styles.modal, contentStyle]} pointerEvents={`box-none`}>
      <Text variant={`titleLarge`}>{title}</Text>
      {description && <Text variant={`bodyMedium`}>{description}</Text>}

      {children}

      <FlexRow justifyContent={`flex-end`} gap={shrink(48)}>
        <Button mode={`contained`} onPress={onConfirm}>
          Confirm
        </Button>
        <Button onPress={onCancel}>Cancel</Button>
      </FlexRow>
    </Pressable>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    modal: {
      backgroundColor: theme.colors.surfaceVariant,
      padding: shrink(60),
      gap: shrink(48),
    },
  })
