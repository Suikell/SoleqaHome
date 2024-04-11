import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMAddControlledActuator } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'

export const useAddControlledActuator = () => {
  const { presentStatusToast } = useStatusToastCtx()

  const navigation = useNavigation()

  const [mAddControlledActuator] = useMAddControlledActuator()

  const addControlledActuators = React.useCallback(
    (groupId: ID, actuatorIds: RoA<ID>) => {
      actuatorIds.forEach((actuatorId, index) => {
        const isLast = index === actuatorIds.length - 1

        mAddControlledActuator({
          variables: {
            groupId,
            actuatorId,
          },
          refetchQueries: isLast ? ['QGroupDetail'] : [],
        })
          .then(({ data }) => {
            const success = data?.result?.success
            if (isLast && success) {
              navigation.goBack()
            }
            presentStatusToast('success', 'Actuator added to group')
          })
          .catch((error) => {
            presentStatusToast(
              'error',
              `Failed to add actuator to group. ${error.message}`,
            )
          })
      })
    },
    [mAddControlledActuator, navigation, presentStatusToast],
  )

  return { addControlledActuators }
}
