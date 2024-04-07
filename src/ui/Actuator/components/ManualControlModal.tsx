import * as React from 'react'
import { Modal, Pressable } from 'react-native'

import { ManualControlContent } from '~ui/Actuator/components/ManualControlContent'
import { useModalStyles } from '~utils/hooks/useModalStyles'

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
  const styles = useModalStyles()

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
