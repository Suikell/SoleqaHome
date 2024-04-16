import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMSetActuatorName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useActuatorSetName = () => {
  const { presentStatusToast } = useStatusToastCtx()

  const { updateActuatorName } = useCategoriesUpdatersCtx()

  const [mSetActuatorName] = useMSetActuatorName()

  const [actuatorName, setName] = React.useState<Nullable<string>>(null)

  const setActuatorName = React.useCallback(
    async (id: ID, newName: string) => {
      mSetActuatorName({
        variables: { id, name: newName },
      })
        .then(({ data }) => {
          const actuator = data?.result?.actuator
          if (isDefined(actuator)) {
            setName(actuator.name)
            updateActuatorName(actuator.id, actuator.name)
          }
        })
        .catch((error) => {
          presentStatusToast(
            `error`,
            `Failed to set actuator name. ${error.message}`,
          )
          setName(null)
        })
    },
    [mSetActuatorName, presentStatusToast, updateActuatorName],
  )

  return { actuatorName, setActuatorName }
}
