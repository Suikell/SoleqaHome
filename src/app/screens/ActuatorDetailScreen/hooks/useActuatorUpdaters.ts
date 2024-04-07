import * as React from 'react'

import { useMSetGroupActuatorPriority } from '~graphql/generated/graphql'

export const useActuatorUpdaters = () => {
  const [mSetGroupActuatorPriority] = useMSetGroupActuatorPriority()

  const [success, setSuccess] = React.useState<Nullable<boolean>>(null)

  const setActuatorPriority = (
    groupId: ID,
    actuatorId: ID,
    priority: number,
  ) => {
    mSetGroupActuatorPriority({
      variables: {
        groupId,
        actuatorId,
        priority,
      },
      refetchQueries: ['QActuatorDetail'],
    })
      .then(({ data }) => {
        const success = Boolean(data?.result?.success)
        setSuccess(success)
      })
      .catch((error) => {
        console.log('error', error)
        setSuccess(false)
      })
  }

  return { success, setActuatorPriority }
}
