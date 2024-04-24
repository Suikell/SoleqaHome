import * as React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { SegmentedButtons } from 'react-native-paper'

import { ConditionList } from '~screens/CreateConditionScreen/components/ConditionList'
import { ConditionValue } from '~screens/CreateConditionScreen/components/ConditionValue'
import { DeviceList } from '~screens/CreateConditionScreen/components/DeviceList'
import { SectionHeader } from '~screens/CreateConditionScreen/components/SectionHeader'
import {
  TDeviceType,
  useCreateConditionCtx,
} from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { useCreateCondition } from '~screens/CreateConditionScreen/hooks/useCreateCondition'
import { CONTENT_MARGIN } from '~styles/spacing'
import { CreateButton } from '~ui/Buttons/CreateButton'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const CreateConditionContent: React.FC<TProps> = () => {
  const {
    selectedType,
    selectType,
    isDeviceVisible,
    isConditionVisible,
    isValueVisible,
    toggleValueVisibility,
    toggleConditionVisibility,
    toggleDeviceVisibility,
  } = useCreateConditionCtx()

  const { createCondition } = useCreateCondition()

  return (
    <>
      <SegmentedButtons
        style={{ margin: CONTENT_MARGIN }}
        value={selectedType}
        onValueChange={(value) => {
          selectType(value as TDeviceType)
        }}
        buttons={[
          {
            value: 'sensor',
            label: 'Sensor',
          },
          {
            value: 'actuator',
            label: 'Actuator',
          },
        ]}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ marginVertical: shrink(24) }}>
          {/* paddingBottom is here because of the keyboard */}
          <View style={{ paddingBottom: 140 }}>
            <SectionHeader
              title={`Choose ${selectedType}`}
              isVisible={isDeviceVisible}
              onPress={toggleDeviceVisibility}
            />
            {isDeviceVisible && <DeviceList />}

            <SectionHeader
              title={`Choose condition`}
              isVisible={isConditionVisible}
              onPress={toggleConditionVisibility}
            />
            {isConditionVisible && <ConditionList />}

            <SectionHeader
              title={`Choose value`}
              isVisible={isValueVisible}
              onPress={toggleValueVisibility}
            />
            {isValueVisible && <ConditionValue />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateButton onPress={createCondition} />
    </>
  )
}
