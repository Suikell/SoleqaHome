import * as React from 'react'
import { Modal, Pressable } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { BUTTONS_GAP } from '~styles/spacing'
import { FlexRow } from '~ui/Layout/FlexRow'
import { useModalStyles } from '~utils/hooks/useModalStyles'

type TProps = RequiredChildren & {
  visible: boolean
  hideModal: () => void
  onConfirm: () => void
  title: string
}

export const ConfirmModal: React.FC<TProps> = ({
  title,
  visible,
  onConfirm,
  hideModal,
  children,
}) => {
  const modalStyle = useModalStyles()

  const onConfirmPress = () => {
    onConfirm()
    hideModal()
  }

  return (
    <Modal visible={visible} onDismiss={hideModal} transparent>
      <Pressable onPress={hideModal} style={modalStyle.container}>
        <Pressable
          style={[modalStyle.modalContent, modalStyle.color, modalStyle.modal]}
          pointerEvents={`box-none`}
        >
          <Text variant={`titleLarge`}>{title}</Text>
          {children}
          <FlexRow justifyContent={`flex-end`} gap={BUTTONS_GAP}>
            <Button onPress={onConfirmPress} mode={`contained`}>
              Confirm
            </Button>
            <Button onPress={hideModal}>Cancel</Button>
          </FlexRow>
        </Pressable>
      </Pressable>
    </Modal>
  )
}
