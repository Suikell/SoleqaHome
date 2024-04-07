import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import { CONTENT_MARGIN } from '~styles/spacing'
import { CardLabel } from '~ui/Group/GroupCard/CardLabel'
import { shrink } from '~utils/helpers/shrink'

type TProps = RequiredChildren & {
  label: string
}

export const GroupCardDescription: React.FC<TProps> = ({ label, children }) => {
  return (
    <View style={styles.content}>
      <CardLabel label={label} />
      <Text variant={`bodySmall`}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: CONTENT_MARGIN,
    marginBottom: shrink(20),
  },
})
