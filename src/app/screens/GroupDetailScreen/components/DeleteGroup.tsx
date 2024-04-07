import { useAppTheme } from 'App'
import * as React from 'react'
import { Button, Text } from 'react-native-paper'

import { useGroupDetailCtx } from '~screens/GroupDetailScreen/contexts/GroupDetailProvider'
import { ConfirmRemoveModal } from '~ui/Group/ConfirmRemoveModal'

type TProps = NoChildren

export const DeleteGroup: React.FC<TProps> = () => {
  const theme = useAppTheme()

  const { group, deleteGroup } = useGroupDetailCtx()
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  return (
    <>
      <Button onPress={() => setIsModalVisible(true)}>Delete group</Button>
      <ConfirmRemoveModal
        visible={isModalVisible}
        hideModal={() => setIsModalVisible(false)}
        title={`Remove group`}
        removeItemName={group.name}
        textBehindName={`group`}
        onConfirm={() => deleteGroup(group.id)}
        extraContent={
          <Text
            variant={`bodyMedium`}
            style={{ color: theme.colors.onSurfaceVariant }}
          >
            Please ensure you have considered all potential impacts before
            proceeding as this action is irreversible.
          </Text>
        }
      />
    </>
  )
}
