import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'

import { GroupsList } from '~screens/GroupsScreen/components/GroupList'
import { GroupsProvider } from '~screens/GroupsScreen/contexts/GroupsProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { shrink } from '~utils/helpers/shrink'

export const GroupsScreen = () => {
  return (
    <GroupsProvider>
      <Appbar.Header style={styles.header}>
        <Text variant={`headlineSmall`} style={styles.label}>
          Groups
        </Text>
        {/* TODO <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.extraPadding}>
          <GroupsList />
        </View>
      </ScrollView>
    </GroupsProvider>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: CONTENT_MARGIN,
    marginTop: CONTENT_MARGIN,
    // margin: CONTENT_MARGIN,
    gap: CONTENT_MARGIN,
  },
  header: {
    justifyContent: 'space-between',
  },
  label: {
    marginLeft: CONTENT_MARGIN,
  },
  extraPadding: {
    paddingBottom: shrink(80),
  },
})
