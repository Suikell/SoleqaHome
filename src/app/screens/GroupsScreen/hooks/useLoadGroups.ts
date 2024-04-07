import * as React from 'react'

import { TFGroup, useQGroups } from '~graphql/generated/graphql'

export type TGroups = RoA<TFGroup>

export const useLoadGroups = () => {
  const [groups, setGroups] = React.useState<TGroups>([])

  const { data, error, loading } = useQGroups()

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }

    setGroups(data.groups || [])
  }, [data, error])

  return { groups, setGroups, loading }
}
