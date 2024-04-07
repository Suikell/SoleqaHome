import * as React from 'react'
import { View } from 'react-native'

import { TriggerGroupCard } from '~screens/ActuatorDetailScreen/components/TriggerGroupCard'
import { useActuatorDetailCtx } from '~screens/ActuatorDetailScreen/contexts/ActuatorDetailProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { GroupListContainer } from '~ui/Group/GroupListContainer'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const TriggerGroups: React.FC<TProps> = () => {
  const { actuator } = useActuatorDetailCtx()

  return (
    <View style={{ gap: shrink(32), margin: CONTENT_MARGIN }}>
      <Headline text={`Applied trigger groups:`} />

      <GroupListContainer>
        {actuator.groups.map((group, index) => (
          <TriggerGroupCard
            key={group.group.id}
            priority={index + 1}
            triggerGroup={group}
          />
        ))}
      </GroupListContainer>
      {/* <GroupListContainerGroupListContainer groups={actuator.groups.map(({ group }) => group)} setGroupActive={} /> */}
    </View>
  )
}
