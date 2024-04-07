import * as React from 'react'

import { useGroupUpdaters } from '~screens/GroupDetailScreen/hooks/useGroupUpdaters'
import { useLoadGroupDetail } from '~screens/GroupDetailScreen/hooks/useLoadGroupDetail'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TGroup = Defined<ReturnType<typeof useLoadGroupDetail>['group']>
type TGroupUpdaters = Pick<
  ReturnType<typeof useGroupUpdaters>,
  | 'setGroupActive'
  | 'removeActuatorFromGroup'
  | 'removeSensorCondition'
  | 'removeActuatorCondition'
  | 'setActuatorChangeToState'
>
type TContext = TGroupUpdaters & {
  group: TGroup
}

const [Provider, useGroupDetailCtx] = createContext<TContext>(`GroupDetail`)

type TProps = RequiredChildren & {
  groupId: ID
}

/**
 * Context provider for group detail.
 */
const GroupDetailProvider: React.FC<TProps> = ({ groupId, children }) => {
  const [group, setGroup] = React.useState<Nullable<TGroup>>(null)

  const { group: loadedGroup, loading } = useLoadGroupDetail(groupId)
  const {
    setGroupActive,
    removeActuatorFromGroup,
    removeSensorCondition,
    removeActuatorCondition,
    setActuatorChangeToState,
  } = useGroupUpdaters(setGroup)

  React.useEffect(() => {
    if (!loadedGroup) return
    setGroup(loadedGroup)
  }, [loadedGroup])

  const updaters = React.useMemo(() => {
    return {
      setGroupActive,
      removeActuatorFromGroup,
      removeSensorCondition,
      removeActuatorCondition,
      setActuatorChangeToState,
    }
  }, [
    setGroupActive,
    removeActuatorFromGroup,
    removeSensorCondition,
    removeActuatorCondition,
    setActuatorChangeToState,
  ])

  if (loading || !group) {
    return <LoadingIndicator />
  }

  return <Provider value={{ group, ...updaters }}>{children}</Provider>
}

export { GroupDetailProvider, useGroupDetailCtx }
