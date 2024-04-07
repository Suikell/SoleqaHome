import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-paper'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { TNavigationProps } from '~navigation/types'
import { useAddControlledActuator } from '~screens/AddControlledActuatorScreen/hooks/useAddControlledActuator'
import { CONTENT_MARGIN } from '~styles/spacing'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'
import { ButtonsContainer } from '~ui/Buttons/ButtonsContainer'
import { CreateButton } from '~ui/Buttons/CreateButton'
import { DeviceButton } from '~ui/Buttons/DeviceButton'

type TProps = TNavigationProps<'AddControlledActuator'>

export const AddControlledActuatorScreen: React.FC<TProps> = ({ route }) => {
  const { groupId, controlledActuators } = route.params
  const { categories } = useCategoriesCtx()
  const { addControlledActuators } = useAddControlledActuator()

  const [selectedIds, setSelectedIds] = React.useState<RoA<ID>>([])

  const onSelect = React.useCallback((actuatorId: ID, isSelected: boolean) => {
    if (isSelected) {
      // If the actuator is already selected, remove it from the array
      setSelectedIds((prev) => prev.filter((id) => id !== actuatorId))
    } else {
      // If the actuator is not selected, add it to the array
      setSelectedIds((prev) => [...prev, actuatorId])
    }
  }, [])

  return (
    <>
      <SimpleAppBar title={`Add controlled actuator`} />
      <ScrollView>
        {categories.map((category) => {
          if (category.actuators.length === 0) return null
          const hasAvailableActuators = category.actuators.some(
            (actuator) => !controlledActuators.includes(actuator.id),
          )
          if (!hasAvailableActuators) return null

          return (
            <View
              key={category.id}
              style={{ margin: CONTENT_MARGIN, rowGap: CONTENT_MARGIN }}
            >
              <Text variant={'bodyLarge'}>{category.name}</Text>

              <ButtonsContainer withoutMargin>
                {category.actuators.map((actuator) => {
                  const isAvailable = !controlledActuators.includes(actuator.id)
                  if (!isAvailable) return null

                  const isSelected = selectedIds.includes(actuator.id)

                  return (
                    <DeviceButton
                      key={actuator.id}
                      name={actuator.name}
                      isSelected={isSelected}
                      select={() => onSelect(actuator.id, isSelected)}
                    />
                  )
                })}
              </ButtonsContainer>
            </View>
          )
        })}
      </ScrollView>
      <CreateButton
        onPress={() => addControlledActuators(groupId, selectedIds)}
      />
    </>
  )
}
