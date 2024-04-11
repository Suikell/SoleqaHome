import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { TFGroup, useQGroups } from '~graphql/generated/graphql'

export type TGroups = RoA<TFGroup>

export const useLoadGroups = () => {
  const { presentStatusToast } = useStatusToastCtx()
  const [groups, setGroups] = React.useState<TGroups>([])

  const { data, error, loading } = useQGroups()

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error.message)
      return
    }

    setGroups(data?.groups || [])
  }, [data, error, presentStatusToast])

  return { groups, setGroups, loading }
}
