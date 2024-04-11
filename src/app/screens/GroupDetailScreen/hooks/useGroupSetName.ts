import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMSetGroupName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useGroupSetName = () => {
  const { presentStatusToast } = useStatusToastCtx()

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
          presentStatusToast(
            'error',
            `Failed to set group name. ${error.message}`,
          )
          setName(null)
        })
    },
    [mSetGroupName, presentStatusToast],
  )

  return { groupName, setGroupName }
}
