import * as React from 'react'

import { TFGroup } from '~graphql/generated/graphql'
import { useGroupsCtx } from '~screens/GroupsScreen/contexts/GroupsProvider'
import { ConfirmActiveModal } from '~ui/Group/ConfirmActiveModal'
import { GroupCardContainer } from '~ui/Group/GroupCard/GroupCardContainer'
import { GroupCardDescription } from '~ui/Group/GroupCard/GroupCardDescription'
import { Switch } from '~ui/Switch/Switch'

type TProps = NoChildren & {
  groupId: TFGroup['id']
  name: TFGroup['name']
  active: TFGroup['active']
  controlledActuators: TFGroup['controlledActuators']
}

export const GroupCard: React.FC<TProps> = ({
  groupId,
  name,
  active,
  controlledActuators,
}) => {
  const { setGroupActive } = useGroupsCtx()
  const controlsActuators = controlledActuators.length > 0

  const [visible, setVisible] = React.useState(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <GroupCardContainer groupId={groupId} name={name}>
      {controlsActuators && (
        <GroupCardDescription label={`Controls:`}>
          {controlledActuators.map((item, index) => {
            if (controlledActuators.length === index + 1) {
              return item.actuator.name
            }
            return `${item.actuator.name}, `
          })}
        </GroupCardDescription>
      )}

      <Switch label={`active`} state={active} onChange={() => showModal()} />
      <ConfirmActiveModal
        visible={visible}
        hideModal={hideModal}
        isActive={active}
        name={name}
        groupId={groupId}
        setGroupActive={setGroupActive}
      />
    </GroupCardContainer>
  )
}
