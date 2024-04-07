import * as React from 'react'

import { useMSetGroupName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useGroupSetName = () => {
  const [mSetGroupName] = useMSetGroupName()

  const [groupName, setName] = React.useState<Nullable<string>>(null)

  const setGroupName = React.useCallback(
    async (id: ID, newName: string) => {
      mSetGroupName({
        variables: { id, name: newName },
      })
        .then(({ data }) => {
          const sensor = data?.result?.group
          if (isDefined(sensor)) {
            setName(sensor.name)
          }
        })
        .catch((error) => {
          console.log('error', error)
          setName(null)
        })
    },
    [mSetGroupName],
  )

  return { groupName, setGroupName }
}
