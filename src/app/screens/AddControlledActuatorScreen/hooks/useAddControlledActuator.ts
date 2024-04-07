import * as React from 'react'

import { useMAddControlledActuator } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'

export const useAddControlledActuator = () => {
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
            return success
          })
          .catch((error) => {
            return error
          })
      })
    },
    [mAddControlledActuator, navigation],
  )

  return { addControlledActuators }
}
