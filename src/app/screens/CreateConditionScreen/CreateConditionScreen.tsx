import * as React from 'react'

import { CreateButton } from '~screens/CreateConditionScreen/components/CreateButton'
import { CreateConditionContent } from '~screens/CreateConditionScreen/components/CreateConditionContent'
import { CreateConditionProvider } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'

type TProps = NoChildren

export const CreateConditionScreen: React.FC<TProps> = () => {
  return (
    <CreateConditionProvider>
      <SimpleAppBar title={`Create new condition`} />
      <CreateConditionContent />
      <CreateButton />
    </CreateConditionProvider>
  )
}
