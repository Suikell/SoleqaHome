import * as React from 'react'

import { useMCreateGroup } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { isDefined } from '~utils/helpers/isDefined'

export const useGroupsUpdaters = () => {
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
          console.error('mFavoriteSensor threw an error', error)
          setIsCreatingGroup(false)
        })
    },
    [mCreateGroup, navigation],
  )

  return { isCreatingGroup, createNewGroup }
}
