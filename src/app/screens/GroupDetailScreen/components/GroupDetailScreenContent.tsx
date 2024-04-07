import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { ControlledActuators } from '~screens/GroupDetailScreen/components/ControlledActuators'
import { GroupConditions } from '~screens/GroupDetailScreen/components/GroupConditions'
import { GroupState } from '~screens/GroupDetailScreen/components/GroupState'
import { CONTENT_MARGIN, SCROLL_PADDING_BOTTOM } from '~styles/spacing'

type TProps = NoChildren

export const GroupDetailScreenContent: React.FC<TProps> = () => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    // <KeyboardAvoidingView style={{ flex: 1 }} behavior={'position'}>
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      <View style={{ paddingBottom: 50, rowGap: CONTENT_MARGIN }}>
        <GroupState />

        <ControlledActuators />
        <GroupConditions />
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: CONTENT_MARGIN,
    paddingBottom: SCROLL_PADDING_BOTTOM,
  },

  stateDescription: {
    marginLeft: CONTENT_MARGIN,
  },
})
