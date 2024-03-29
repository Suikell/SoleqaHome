import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { GroupsScreenContent } from '~screens/GroupsScreen/components/GroupsScreenContent'
import { shrink } from '~utils/helpers/shrink'

export const GroupsScreen = () => {
  return (
    <>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Groups
        </Text>
        {/* TODO <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <GroupsScreenContent />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: shrink(48),
  },
})
