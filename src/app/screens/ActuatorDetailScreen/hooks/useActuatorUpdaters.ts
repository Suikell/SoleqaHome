import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMSetGroupActuatorPriority } from '~graphql/generated/graphql'

export const useActuatorUpdaters = () => {
  const { presentStatusToast } = useStatusToastCtx()

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
        presentStatusToast(
          'error',
          `Failed to set actuator priority. ${error.message}`,
        )
        setSuccess(false)
      })
  }

  return { success, setActuatorPriority }
}
