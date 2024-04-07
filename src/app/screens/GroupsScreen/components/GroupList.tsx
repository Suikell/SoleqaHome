import * as React from 'react'

import { GroupCard } from '~screens/GroupsScreen/components/GroupCard'
import { useGroupsCtx } from '~screens/GroupsScreen/contexts/GroupsProvider'
import { GroupListContainer } from '~ui/Group/GroupListContainer'

type TProps = NoChildren

export const GroupsList: React.FC<TProps> = () => {
  const { groups } = useGroupsCtx()
  return (
    <GroupListContainer>
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          groupId={group.id}
          name={group.name}
          active={group.active}
          controlledActuators={group.controlledActuators}
        />
      ))}
    </GroupListContainer>
  )
}
