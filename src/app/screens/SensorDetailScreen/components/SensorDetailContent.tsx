import { useAppTheme } from 'App'
import * as React from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { GraphInput } from '~screens/SensorDetailScreen/components/GraphInput'
import { OverlayControl } from '~screens/SensorDetailScreen/components/OverlayControl'
import { PeriodNavigation } from '~screens/SensorDetailScreen/components/PeriodNavigation'
import { SensorGraph } from '~screens/SensorDetailScreen/components/SensorGraph'
import { SensorInfoValues } from '~screens/SensorDetailScreen/components/SensorInfoValues'
import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { Headline } from '~ui/Text/Headline'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const SensorDetailContent: React.FC<TProps> = () => {
  const { custom: customColors } = useAppTheme()

  const { criticalUnder, criticalOver, selectedPeriod } = useGraphValuesCtx()
  const { setCriticalUnder, setCriticalOver } = useGraphControlCtx()
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false)

  const [isPeriodOverlayCollapsed, setIsPeriodOverlayCollapsed] =
    React.useState(true)

  React.useEffect(() => setIsPeriodOverlayCollapsed(true), [selectedPeriod])

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

          <Pressable
            onPress={() => {
              if (!isPeriodOverlayCollapsed) {
                setIsPeriodOverlayCollapsed(true)
              }
            }}
          >
            <PeriodNavigation />
            <ScrollView
              contentContainerStyle={{
                // scrollView doesnt count with height of the collapsible box,
                // this extra padding helps it to scroll trough the whole content
                paddingBottom: 200,
              }}
            >
              <Pressable
                pointerEvents={
                  isKeyboardVisible || !isPeriodOverlayCollapsed
                    ? `none`
                    : `auto`
                }
              >
                <SensorGraph />
              </Pressable>

              {/* TODO - better tooltip, with icon (i) */}

              {/* OVERLAY */}
              <OverlayControl
                isCollapsed={isPeriodOverlayCollapsed}
                setIsCollapsed={setIsPeriodOverlayCollapsed}
              />

              {/* CRITICAL */}

              <Pressable
                style={styles.critical}
                pointerEvents={!isPeriodOverlayCollapsed ? `none` : undefined}
              >
                <Headline text={`Set critical values`} />
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
              </Pressable>
            </ScrollView>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  critical: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
