import * as React from 'react'
import { View } from 'react-native'

import { CONTENT_MARGIN } from '~styles/spacing'
import { GroupsList } from '~ui/Group/GroupsList'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const TriggerGroups: React.FC<TProps> = () => {
  //   TODO - add real data, add remove group button, add want switch prop
  return (
    <View style={{ gap: shrink(32), margin: CONTENT_MARGIN }}>
      <Headline text={`Applied trigger groups:`} />
      <GroupsList />
    </View>
  )
}
