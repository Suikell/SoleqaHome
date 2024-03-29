import { useAppTheme } from 'App'
import * as React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Text } from 'react-native-paper'

import { GraphInput } from '~screens/SensorDetailScreen/components/GraphInput'
import { PeriodNavigation } from '~screens/SensorDetailScreen/components/PeriodNavigation'
import { SensorGraph } from '~screens/SensorDetailScreen/components/SensorGraph'
import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { useSensorCtx } from '~screens/SensorDetailScreen/contexts/SensorDetailProvider'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { FlexRow } from '~ui/Layout/FlexRow'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorDetailContent: React.FC<TProps> = () => {
  const { custom: customColors } = useAppTheme()

  const { sensor } = useSensorCtx()
  const { criticalUnder, criticalOver } = useGraphValuesCtx()
  const { setCriticalUnder, setCriticalOver } = useGraphControlCtx()
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            justifyContent: isKeyboardVisible ? 'flex-end' : undefined,
            flex: 1,
          }}
        >
          <FlexRow
            justifyContent={`space-between`}
            marginRight={shrink(48)}
            marginTop={shrink(48)}
          >
            <SensorValue
              value={sensor.currentValue}
              unitType={sensor.unitType}
              valueVariant={`displayMedium`}
              unitVariant={`displaySmall`}
            />
            <StatusInfo
              isOnline={sensor.isOnline}
              batteryLevel={sensor.batteryLevel}
            />
          </FlexRow>
          <PeriodNavigation />

          <SensorGraph />
          <View style={styles.content}>
            <Text variant="titleSmall">Add features to your graph:</Text>

            <GraphInput
              label={`Critical under`}
              value={criticalUnder}
              outLineColor={customColors.criticalUnder}
              activeOutlineColor={customColors.criticalUnderFocus}
              onChangeValue={setCriticalUnder}
              setKeyboardVisible={setKeyboardVisible}
            />
            <GraphInput
              label={`Critical over`}
              value={criticalOver}
              outLineColor={customColors.criticalOver}
              activeOutlineColor={customColors.criticalOverFocus}
              onChangeValue={setCriticalOver}
              setKeyboardVisible={setKeyboardVisible}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
