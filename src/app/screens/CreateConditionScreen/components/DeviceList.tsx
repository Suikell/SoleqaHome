import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { ButtonsContainer } from '~screens/CreateConditionScreen/components/ButtonsContainer'
import { DeviceButton } from '~screens/CreateConditionScreen/components/DeviceButton'
import {
  TDevice,
  useCreateConditionCtx,
} from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { CONTENT_MARGIN } from '~styles/spacing'

type TProps = NoChildren

export const DeviceList: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()
  const { selectedType } = useCreateConditionCtx()
  const { selectedDevice, selectDevice } = useCreateConditionCtx()

  return (
    <>
      {categories.map((category) => {
        if (category.sensors.length === 0) return null

        const devices: RoA<TDevice> =
          selectedType === 'sensor' ? category.sensors : category.actuators

        return (
          <View
            key={category.id}
            style={{ margin: CONTENT_MARGIN, rowGap: CONTENT_MARGIN }}
          >
            <Text variant={'bodyLarge'}>{category.name}</Text>
            <ButtonsContainer withoutMargin>
              {devices.map((device) => {
                const isSelected = selectedDevice?.id === device.id

                return (
                  <DeviceButton
                    key={device.id}
                    name={device.name}
                    isSelected={isSelected}
                    select={() =>
                      selectDevice(device.id, device.name, device.unit)
                    }
                  />
                )
              })}
            </ButtonsContainer>
          </View>
        )
      })}
    </>
  )
}
