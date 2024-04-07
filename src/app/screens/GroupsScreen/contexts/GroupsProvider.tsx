import * as React from 'react'

import { useGroupsUpdaters } from '~screens/GroupsScreen/hooks/useGroupsUpdaters'
import { useLoadGroups } from '~screens/GroupsScreen/hooks/useLoadGroups'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TGroupUpdaters = ReturnType<typeof useGroupsUpdaters>
type TContext = {
  groups: ReturnType<typeof useLoadGroups>['groups']
  setGroupActive: TGroupUpdaters['setGroupActive']
}

const [Provider, useGroupsCtx] = createContext<TContext>(`Groups`)

type TProps = RequiredChildren

/**
 * Context provider for groups.
 * Provides groups and updateGroup function.
 */
const GroupsProvider: React.FC<TProps> = ({ children }) => {
  const { groups, setGroups, loading } = useLoadGroups()

  const { setGroupActive } = useGroupsUpdaters(setGroups)

  const value = React.useMemo(
    () => ({ groups, setGroupActive }),
    [groups, setGroupActive],
  )

  if (loading) {
    return <LoadingIndicator />
  }

  return <Provider value={value}>{children}</Provider>
}

export { GroupsProvider, useGroupsCtx }
