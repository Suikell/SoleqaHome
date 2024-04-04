import * as React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { TNavigationProps } from '~navigation/types'
import { ActuatorValues } from '~screens/ActuatorDetailScreen/components/ActuatorValues'
import { ManualControl } from '~screens/ActuatorDetailScreen/components/ManualControl'
import { TriggerGroups } from '~screens/ActuatorDetailScreen/components/TriggerGroups'
import { useLoadActuatorDetail } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'

type TProps = TNavigationProps<'ActuatorDetail'>

export const ActuatorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, actuatorId } = route.params

  const [isManualControlOpen, setIsManualControlOpen] = React.useState(false)
  const { actuator, loading } = useLoadActuatorDetail(actuatorId)
  return (
    <Pressable
      onPress={() => {
        if (isManualControlOpen) {
          setIsManualControlOpen(false)
        }
      }}
    >
      <DetailAppBar title={name} />
      {loading && <LoadingIndicator />}

      {!loading && actuator && (
        <View style={styles.content}>
          <ActuatorValues
            isOnline={actuator.isOnline}
            currentState={actuator.currentState}
            batteryLevel={actuator.batteryLevel}
            hasManualOverride={actuator.manualOverride}
            manualOverrideValue={actuator.manualOverrideValue}
          />
          <ManualControl
            actuatorId={actuatorId}
            currentState={actuator.currentState}
            hasManualOverride={actuator.manualOverride}
            isManualControlOpen={isManualControlOpen}
            setIsManualControlOpen={setIsManualControlOpen}
          />
          <Pressable pointerEvents={isManualControlOpen ? `none` : undefined}>
            <TriggerGroups />
          </Pressable>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  content: {
    // gap: shrink(64),
  },
})
