import { useAppTheme } from 'App'
import * as React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { Text, Tooltip } from 'react-native-paper'

import { GraphInput } from '~screens/SensorDetailScreen/components/GraphInput'
import { OverlayControl } from '~screens/SensorDetailScreen/components/OverlayControl'
import { PeriodNavigation } from '~screens/SensorDetailScreen/components/PeriodNavigation'
import { SensorGraph } from '~screens/SensorDetailScreen/components/SensorGraph'
import { SensorInfoValues } from '~screens/SensorDetailScreen/components/SensorInfoValues'
import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorDetailContent: React.FC<TProps> = () => {
  const { custom: customColors } = useAppTheme()

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
          <SensorInfoValues />
          <PeriodNavigation />

          <Pressable pointerEvents={isKeyboardVisible ? `none` : `auto`}>
            <SensorGraph />
          </Pressable>
          <View style={styles.content}>
            {/* TODO - better tooltip, with icon (i) */}

            {/* OVERLAY */}
            <OverlayControl />

            {/* CRITICAL */}
            <Tooltip
              title="priorsoakropakspdokapodkoakdopakswopdkapoity"
              enterTouchDelay={0.1}
            >
              <Text variant="titleSmall">Set critical values</Text>
            </Tooltip>
            <GraphInput
              label={`Critical over`}
              value={criticalOver}
              outLineColor={customColors.criticalOver}
              activeOutlineColor={customColors.criticalOverFocus}
              onChangeValue={setCriticalOver}
              setKeyboardVisible={setKeyboardVisible}
            />
            <GraphInput
              label={`Critical under`}
              value={criticalUnder}
              outLineColor={customColors.criticalUnder}
              activeOutlineColor={customColors.criticalUnderFocus}
              onChangeValue={setCriticalUnder}
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
