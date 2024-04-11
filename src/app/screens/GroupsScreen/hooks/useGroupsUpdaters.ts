import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { TFGroup, useMSetGroupActive } from '~graphql/generated/graphql'
import { TGroups } from '~screens/GroupsScreen/hooks/useLoadGroups'
import { isDefined } from '~utils/helpers/isDefined'

export const useGroupsUpdaters = (setGroups: ReactSetState<TGroups>) => {
  const { presentStatusToast } = useStatusToastCtx()
  const [mSetGroupActive] = useMSetGroupActive()

  const updateGroup = React.useCallback(
    (group: TFGroup) => {
      setGroups((prevGroups) => {
        // Find the index of the group in the previous state
        const index = prevGroups.findIndex((g) => g.id === group.id)

        // If the group was not found, return the previous state
        if (index === -1) {
          return prevGroups
        }

        // Replace the group at the found index with the new group
        return [
          ...prevGroups.slice(0, index),
          group,
          ...prevGroups.slice(index + 1),
        ]
      })
    },
    [setGroups],
  )

  const setGroupActive = React.useCallback(
    (groupId: ID, active: boolean) => {
      mSetGroupActive({
        variables: {
          groupId,
          active,
        },
      })
        .then(({ data }) => {
          const updatedGroup = data?.result?.group
          if (isDefined(updatedGroup)) {
            updateGroup(updatedGroup)
          }
        })
        .catch((error) => {
          presentStatusToast(
            'error',
            `Failed to activate group. ${error.message}`,
          )
        })
    },
    [mSetGroupActive, presentStatusToast, updateGroup],
  )

  return { setGroupActive }
}
