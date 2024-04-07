import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch, Text } from 'react-native-paper'

import { useGroupDetailCtx } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { CONTENT_MARGIN } from '~styles/spacing'
import { ConfirmActiveModal } from '~ui/Group/ConfirmActiveModal'
import { FlexRow } from '~ui/Layout/FlexRow'
import { Headline } from '~ui/Text/Headline'

type TProps = NoChildren

export const GroupState: React.FC<TProps> = () => {
  const { group, setGroupActive } = useGroupDetailCtx()
  const [visible, setVisible] = React.useState(false)
  return (
    <>
      <FlexRow justifyContent={`space-between`}>
        <View>
          <Headline text={`Group activity:`} />
          <Text style={styles.stateDescription}>
            Whether the group is active or not.
          </Text>
        </View>
        <Switch
          value={group.active}
          onChange={() => {
            setVisible(true)
          }}
        />
      </FlexRow>
      <ConfirmActiveModal
        visible={visible}
        hideModal={() => setVisible(false)}
        groupId={group.id}
        isActive={group.active}
        setGroupActive={setGroupActive}
        name={group.name}
      />
    </>
  )
}

const styles = StyleSheet.create({
  stateDescription: {
    marginLeft: CONTENT_MARGIN,
  },
})
