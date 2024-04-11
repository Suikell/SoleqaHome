import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMCreateGroup } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { isDefined } from '~utils/helpers/isDefined'

export const useGroupsUpdaters = () => {
  const { presentStatusToast } = useStatusToastCtx()

  const navigation = useNavigation()

  const [isCreatingGroup, setIsCreatingGroup] = React.useState(false)

  const [mCreateGroup] = useMCreateGroup()

  const createNewGroup = React.useCallback(
    (name: string) => {
      setIsCreatingGroup(true)
      mCreateGroup({
        variables: {
          name,
        },
        refetchQueries: ['QGroups'],
      })
        .then(({ data }) => {
          const newGroup = data?.result?.group

          if (isDefined(newGroup)) {
            navigation.navigate('GroupDetail', {
              groupId: newGroup.id,
              name: newGroup.name,
            })
          }
          setIsCreatingGroup(false)
        })
        .catch((error) => {
          presentStatusToast(
            'error',
            `Failed to create group. ${error.message}`,
          )
          setIsCreatingGroup(false)
        })
    },
    [mCreateGroup, navigation, presentStatusToast],
  )

  return { isCreatingGroup, createNewGroup }
}
