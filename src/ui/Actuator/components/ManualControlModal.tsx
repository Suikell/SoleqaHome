import { TAppTheme } from 'App'
import * as React from 'react'
import { Modal, Pressable, StyleSheet } from 'react-native'

import { ManualControlContent } from '~ui/Actuator/components/ManualControlContent'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TManualControlContent = PropsOf<typeof ManualControlContent>
type TManualControlContentProps = Pick<
  TManualControlContent,
  'actuatorId' | 'currentState'
>
type TProps = NoChildren &
  TManualControlContentProps & {
    visible: boolean
    hideModal: TManualControlContent['closeContent']
  }

export const ManualControlModal: React.FC<TProps> = ({
  actuatorId,
  currentState,
  visible,
  hideModal,
}) => {
  const styles = useStylesWithTheme(styleCreator)

  return (
    <Modal visible={visible} onDismiss={hideModal} transparent>
      <Pressable onPress={hideModal} style={styles.container}>
        <ManualControlContent
          actuatorId={actuatorId}
          currentState={currentState}
          isClosed={!visible}
          closeContent={hideModal}
          contentStyle={styles.modal}
        />
      </Pressable>
    </Modal>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backdrop,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    modal: {
      margin: 20,
      borderRadius: 16,
    },
  })
