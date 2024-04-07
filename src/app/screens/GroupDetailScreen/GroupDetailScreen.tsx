import * as React from 'react'

import { TNavigationProps } from '~navigation/types'
import { GroupDetailScreenContent } from '~screens/GroupDetailScreen/components/GroupDetailScreenContent'
import { GroupDetailProvider } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'GroupDetail'>

export const GroupDetailScreen: React.FC<TProps> = ({ route }) => {
  const { groupId, name } = route.params

  const groupName = name || 'Group name'
  return (
    <GroupDetailProvider groupId={groupId}>
      <DetailAppBar title={groupName} />
      <GroupDetailScreenContent />
    </GroupDetailProvider>
  )
}
