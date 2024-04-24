import { useAppTheme } from 'App'
import * as React from 'react'
import {
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { useGroupsUpdaters } from 'src/app/shared/hooks/useGroupsUpdaters'

import { FlexRow } from '~ui/Layout/FlexRow'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { shrink } from '~utils/helpers/shrink'
import { useModalStyles } from '~utils/hooks/useModalStyles'

type TProps = NoChildren & {
  visible: boolean
  hideModal: () => void
}

const MAX_NAME_LENGTH = 128

export const ChooseNameModal: React.FC<TProps> = ({ visible, hideModal }) => {
  const theme = useAppTheme()
  const modalStyle = useModalStyles()

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false)

  const { isCreatingGroup, createNewGroup } = useGroupsUpdaters()
  const [name, setName] = React.useState<string>('Group name')

  const onConfirm = React.useCallback(() => {
    createNewGroup(name)
    hideModal()
  }, [createNewGroup, hideModal, name])

  const onDismiss = React.useCallback(() => {
    if (isCreatingGroup) {
      return
    }
    if (isKeyboardVisible) {
      Keyboard.dismiss()
      return
    }
    hideModal()
  }, [hideModal, isCreatingGroup, isKeyboardVisible])

  if (isCreatingGroup) {
    return <LoadingIndicator />
  }

  return (
    <Modal visible={visible} onDismiss={onDismiss} transparent>
      <Pressable onPress={onDismiss} style={modalStyle.container}>
        <Pressable
          style={[
            modalStyle.modalContent,
            modalStyle.color,
            modalStyle.modal,
            isKeyboardVisible && styles.modalMove,
          ]}
          pointerEvents={`box-none`}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
              <Text variant={`titleLarge`}>Create new group</Text>
              <TextInput
                value={name}
                mode={`outlined`}
                label={'Choose group name'}
                maxLength={MAX_NAME_LENGTH}
                onChangeText={(value) => setName(value)}
                onTouchStart={() => setKeyboardVisible(true)}
                onEndEditing={() => setKeyboardVisible(false)}
                theme={{
                  colors: {
                    background: theme.colors.surfaceVariant,
                    outline: theme.colors.onTertiaryContainer,
                    onSurfaceVariant: theme.colors.tertiary,
                  },
                }}
              />

              <FlexRow gap={shrink(80)}>
                <Button
                  disabled={isCreatingGroup}
                  onPress={onConfirm}
                  mode={`contained`}
                >
                  Confirm
                </Button>
                <Button disabled={isCreatingGroup} onPress={onDismiss}>
                  Cancel
                </Button>
              </FlexRow>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalMove: {
    bottom: `10%`,
  },
  content: {
    rowGap: shrink(80),
    padding: shrink(32),
  },
})
