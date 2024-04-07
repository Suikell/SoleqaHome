import * as React from 'react'
import { Appbar } from 'react-native-paper'

import { useNavigation } from '~navigation/hooks/useNavigation'

type TProps = NoChildren & {
  title: string
}

export const SimpleAppBar: React.FC<TProps> = ({ title }) => {
  const navigation = useNavigation()

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}
