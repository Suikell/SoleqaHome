import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { ControlledActuators } from '~screens/GroupDetailScreen/components/ControlledActuators'
import { DeleteGroup } from '~screens/GroupDetailScreen/components/DeleteGroup'
import { GroupConditions } from '~screens/GroupDetailScreen/components/GroupConditions'
import { GroupState } from '~screens/GroupDetailScreen/components/GroupState'
import { CONTENT_MARGIN, SCROLL_CONTENT_PADDING_BOTTOM } from '~styles/spacing'

type TProps = NoChildren

export const GroupDetailScreenContent: React.FC<TProps> = () => {
  return (
    <ScrollView
      style={styles.content}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <GroupState />

        <ControlledActuators />
        <GroupConditions />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingVertical: SCROLL_CONTENT_PADDING_BOTTOM,
        }}
      >
        <DeleteGroup />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
  },

  stateDescription: {
    marginLeft: CONTENT_MARGIN,
  },
})
