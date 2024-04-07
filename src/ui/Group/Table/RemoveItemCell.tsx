import { useAppTheme } from 'App'
import * as React from 'react'
import { Pressable } from 'react-native'
import { DataTable, Icon } from 'react-native-paper'

import { ConfirmRemoveModal } from '~ui/Group/ConfirmRemoveModal'
import { useTableStyles } from '~utils/hooks/useTableStyles'

type TModalProps = PropsOf<typeof ConfirmRemoveModal>
type TProps = NoChildren & {
  onRemove: TModalProps['onConfirm']
  modalTitle: TModalProps['title']
  modalTextBehindName?: TModalProps['textBehindName']
  name: TModalProps['removeItemName']
}

export const RemoveItemCell: React.FC<TProps> = ({
  onRemove,
  modalTitle,
  modalTextBehindName,
  name,
}) => {
  const theme = useAppTheme()
  const { right, flexHalf } = useTableStyles()
  const [isPressed, setIsPressed] = React.useState(false)

  const [isModalVisible, setIsModalVisible] = React.useState(false)

  return (
    <>
      <DataTable.Cell style={[right, flexHalf, { overflow: 'visible' }]}>
        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={{
            width: `100%`,
            height: `100%`,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Icon
            size={25}
            source={`close`}
            color={
              isPressed ? theme.colors.errorContainer : theme.custom.remove
            }
          />
        </Pressable>
      </DataTable.Cell>
      <ConfirmRemoveModal
        visible={isModalVisible}
        hideModal={() => setIsModalVisible(false)}
        title={modalTitle}
        onConfirm={onRemove}
        textBehindName={modalTextBehindName}
        removeItemName={name}
      />
    </>
  )
}
