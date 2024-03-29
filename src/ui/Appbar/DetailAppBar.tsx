import * as React from 'react'
import { Appbar } from 'react-native-paper'

import { useNavigation } from '~navigation/hooks/useNavigation'
import { isDefined } from '~utils/helpers/isDefined'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'

type TProps = NoChildren & {
  title?: string
}

export const DetailAppBar: React.FC<TProps> = ({ title }) => {
  const navigation = useNavigation()
  const hasTitle = isDefined(title)

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      {hasTitle && <Appbar.Content title={toCapitalizedLowerCase(title)} />}
      <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
  )
}
