import { TAppTheme } from 'App'
import * as React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { List } from 'react-native-paper'

import { useModalStyles } from '~utils/hooks/useModalStyles'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren & {
  visible: boolean
  hideModal: () => void
  options: RoA<string>
  selected: string
  onSelect: (option: string) => void
}

export const SelectBoxModal: React.FC<TProps> = ({
  visible,
  hideModal,
  options,
  selected,
  onSelect,
}) => {
  const modalStyle = useModalStyles()
  const styles = useStylesWithTheme(styleCreator)

  return (
    <Modal visible={visible} onDismiss={hideModal} transparent>
      <Pressable onPress={hideModal} style={modalStyle.container}>
        <Pressable
          style={[modalStyle.color, modalStyle.modal]}
          pointerEvents={`box-none`}
        >
          {options.map((option, index) => {
            const isFirst = index === 0
            const isLast = index === options.length - 1
            const isSelected = option === selected
            return (
              <View
                key={option}
                style={[
                  isSelected && styles.selectedContainer,
                  isFirst && styles.topBorder,
                  isLast && styles.bottomBorder,
                ]}
              >
                <List.Item
                  key={option}
                  onPress={() => {
                    onSelect(option)
                    hideModal()
                  }}
                  title={option}
                  titleNumberOfLines={2}
                  titleStyle={[
                    styles.title,
                    isSelected && styles.selectedTitle,
                  ]}
                />
                {!isLast && <View style={styles.divider} />}
              </View>
            )
          })}
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const RADIUS = 16
const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    title: {
      paddingHorizontal: 24,
      textAlign: 'center',
    },
    topBorder: {
      borderTopLeftRadius: RADIUS,
      borderTopRightRadius: RADIUS,
    },
    bottomBorder: {
      borderBottomLeftRadius: RADIUS,
      borderBottomRightRadius: RADIUS,
    },
    selectedContainer: {
      backgroundColor: theme.colors.onPrimaryContainer,
    },
    selectedTitle: {
      color: theme.colors.surfaceVariant,
    },
    divider: {
      height: 1,
      width: `100%`,
      opacity: 0.3,
      backgroundColor: theme.colors.onPrimaryContainer,
    },
  })
