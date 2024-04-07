import * as React from 'react'

import { TFGroup } from '~graphql/generated/graphql'
import { ConfirmModal } from '~ui/Layout/ConfirmModal'
import { EmphasisText } from '~ui/Layout/EmphasisText'

type TModalProps = Pick<PropsOf<typeof ConfirmModal>, 'hideModal' | 'visible'>

type TProps = NoChildren &
  TModalProps & {
    groupId: TFGroup['id']
    name: TFGroup['name']
    isActive: TFGroup['active']
    setGroupActive: (groupId: TFGroup['id'], isActive: boolean) => void
  }

export const ConfirmActiveModal: React.FC<TProps> = ({
  groupId,
  name,
  isActive,
  visible,
  hideModal,
  setGroupActive,
}) => {
  const activationState = isActive ? 'deactivate' : 'activate'

  const onConfirm = () => {
    setGroupActive(groupId, !isActive)
  }

  return (
    <ConfirmModal
      visible={visible}
      hideModal={hideModal}
      onConfirm={onConfirm}
      title={`Group activity`}
    >
      Are you sure you want to
      <EmphasisText> {activationState}</EmphasisText> the
      {` `}
      <EmphasisText>{name}</EmphasisText> group? This action will impact all the
      actuators controlled by this group.
    </ConfirmModal>
  )
}
