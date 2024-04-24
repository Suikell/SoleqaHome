import * as React from 'react'
import { Pressable } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { SelectBoxModal } from '~ui/Select/SelectBoxModal'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  value: string
  setIsFocused: ReactSetState<boolean>
  onChangeValue: (value: string) => void
}

const values = ['ON', 'OFF']

export const ActuatorConditionValue: React.FC<TProps> = ({
  value,
  setIsFocused,
  onChangeValue,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <>
      <Pressable
        onPress={() => {
          setIsVisible(true)
        }}
        onPressIn={() => setIsFocused(true)}
      >
        <FlexRow paddingHorizontal={shrink(16)} width={`100%`}>
          <Text>{value}</Text>
          {!isVisible && <Icon source={`chevron-down`} size={20} />}
        </FlexRow>
      </Pressable>
      <SelectBoxModal
        options={values}
        selected={value}
        visible={isVisible}
        hideModal={() => {
          setIsVisible(false)
          setIsFocused(false)
        }}
        onSelect={onChangeValue}
      />
    </>
  )
}
