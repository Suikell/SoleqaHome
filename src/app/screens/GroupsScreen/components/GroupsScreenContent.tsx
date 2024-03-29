import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { GroupsList } from '~ui/Group/GroupsList'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const GroupsScreenContent: React.FC<TProps> = () => {
  return (
    <View style={styles.content}>
      <GroupsList />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
