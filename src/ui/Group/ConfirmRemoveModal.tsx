import * as React from 'react'

import { ConfirmModal } from '~ui/Layout/ConfirmModal'
import { EmphasisText } from '~ui/Layout/EmphasisText'

type TModalProps = Pick<
  PropsOf<typeof ConfirmModal>,
  'hideModal' | 'visible' | 'onConfirm' | 'title'
>

type TProps = NoChildren &
  TModalProps & {
    removeItemName: string
    textBehindName?: string
  }

export const ConfirmRemoveModal: React.FC<TProps> = ({
  visible,
  title,
  removeItemName,
  hideModal,
  onConfirm,
  textBehindName,
}) => {
  return (
    <ConfirmModal
      visible={visible}
      hideModal={hideModal}
      onConfirm={onConfirm}
      title={title}
    >
      Are you sure you want to remove
      <EmphasisText> {removeItemName}</EmphasisText> {textBehindName}?
    </ConfirmModal>
  )
}
