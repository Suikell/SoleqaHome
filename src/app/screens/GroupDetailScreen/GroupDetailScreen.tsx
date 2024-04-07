import * as React from 'react'

import { TNavigationProps } from '~navigation/types'
import { GroupDetailScreenContent } from '~screens/GroupDetailScreen/components/GroupDetailScreenContent'
import { GroupDetailProvider } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { useGroupSetName } from '~screens/GroupDetailScreen/hooks/useGroupSetName'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'GroupDetail'>

export const GroupDetailScreen: React.FC<TProps> = ({ route }) => {
  const { groupId, name } = route.params
  const { groupName, setGroupName } = useGroupSetName()

  const onNameChange = React.useCallback(
    (newName: string) => {
      setGroupName(groupId, newName)
    },
    [groupId, setGroupName],
  )

  return (
    <>
      <DetailAppBar title={groupName ?? name} onNameChange={onNameChange} />

      <GroupDetailProvider groupId={groupId}>
        <GroupDetailScreenContent />
      </GroupDetailProvider>
    </>
  )
}
