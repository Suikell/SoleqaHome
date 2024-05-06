import * as React from 'react'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  TFGroup,
  TQGroupsVariables,
  useQGroups,
} from '~graphql/generated/graphql'

export type TGroups = RoA<TFGroup>

export const useLoadGroups = () => {
  const { presentStatusToast } = useStatusToastCtx()
  const [groups, setGroups] = React.useState<TGroups>([])

  const { user } = useAuthCtx()

  const variables = React.useMemo<TQGroupsVariables | undefined>(() => {
    if (!user) return undefined
    return { householdId: user.householdId }
  }, [user])

  const { data, error, loading } = useQGroups({
    variables,
    skip: !variables,
  })

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error.message)
      return
    }

    setGroups(data?.groups || [])
  }, [data, error, presentStatusToast])

  return { groups, setGroups, loading }
}
