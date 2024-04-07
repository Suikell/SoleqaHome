import * as React from 'react'

import { TNavigationProps } from '~navigation/types'
import { CreateConditionContent } from '~screens/CreateConditionScreen/components/CreateConditionContent'
import { CreateConditionProvider } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'

type TProps = TNavigationProps<'CreateCondition'>

export const CreateConditionScreen: React.FC<TProps> = ({ route }) => {
  const { groupId } = route.params

  return (
    <CreateConditionProvider groupId={groupId}>
      <SimpleAppBar title={`Create new condition`} />
      <CreateConditionContent />
    </CreateConditionProvider>
  )
}
