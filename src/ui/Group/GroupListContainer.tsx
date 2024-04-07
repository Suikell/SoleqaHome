import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import { AddGroupButton } from '~ui/Group/AddGroupButton'
import { shrink } from '~utils/helpers/shrink'

type TProps = RequiredChildren

export const GroupListContainer: React.FC<TProps> = ({ children }) => {
  return (
    <View style={styles.groups}>
      <AddGroupButton />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  groups: {
    flexDirection: `row`,
    rowGap: shrink(48),
    flexWrap: 'wrap',
    justifyContent: `space-between`,
  },
})
