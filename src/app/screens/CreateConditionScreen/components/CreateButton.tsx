import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

import { CONTENT_MARGIN } from '~styles/spacing'

type TProps = NoChildren & {}

export const CreateButton: React.FC<TProps> = ({}) => {
  return (
    <FAB
      icon="plus"
      variant={`secondary`}
      style={styles.fab}
      onPress={() => console.log('Pressed')}
    />
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: CONTENT_MARGIN,
    right: 20,
    bottom: 20,
  },
})
