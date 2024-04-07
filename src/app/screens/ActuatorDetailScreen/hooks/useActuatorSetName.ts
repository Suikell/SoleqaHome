import * as React from 'react'

import { useMSetActuatorName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useActuatorSetName = () => {
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
          }
        })
        .catch((error) => {
          console.log('error', error)
          setName(null)
        })
    },
    [mSetActuatorName],
  )

  return { actuatorName, setActuatorName }
}
