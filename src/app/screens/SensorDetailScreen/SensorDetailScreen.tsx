import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text, TextInput } from 'react-native-paper'

import { TNavigationProps } from '~navigation/types'
import { SensorGraph } from '~screens/SensorDetailScreen/components/SensorGraph'
import { useLoadSensorDetail } from '~screens/SensorDetailScreen/hooks/useLoadSensorDetail'
import { Battery } from '~ui/Battery/Battery'
import { Online } from '~ui/Battery/Online'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { shrink } from '~utils/helpers/shrink'

type TProps = TNavigationProps<'SensorDetail'>

export const SensorDetailScreen: React.FC<TProps> = ({ navigation, route }) => {
  const { custom: customColors } = useAppTheme()
  const { name, sensorId } = route.params

  const { sensor, loading } = useLoadSensorDetail(sensorId)

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={name} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      {loading && <LoadingIndicator />}

      {!loading && (
        <>
          <View style={styles.row}>
            <SensorValue
              value={sensor?.currentValue ?? null}
              unitType={sensor?.unitType ?? null}
              valueVariant={`displayMedium`}
              unitVariant={`displaySmall`}
            />
            <View>
              <Battery batteryLevel={sensor?.batteryLevel ?? null} />
              <Online state={sensor?.isOnline} />
            </View>
          </View>
          <SensorGraph />
          <View style={styles.content}>
            <Text variant="titleSmall">Add features to your graph:</Text>
            <TextInput
              label={`Optimal value`}
              outlineColor={customColors.optimal}
              activeOutlineColor={customColors.optimalFocus}
              value={'test'}
              // onChangeText={setEmail}
              mode={`outlined`}
            />
            <TextInput
              label={`Critical value`}
              outlineColor={customColors.critical}
              activeOutlineColor={customColors.criticalFocus}
              value={'test'}
              // onChangeText={setEmail}
              mode={`outlined`}
            />
            <TextInput
              label={`Period overlay`}
              outlineColor={customColors.overlay}
              activeOutlineColor={customColors.overlayFocus}
              value={'test'}
              // onChangeText={setEmail}
              mode={`outlined`}
            />
          </View>
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `space-between`,
    marginRight: shrink(48),
    marginTop: shrink(48),
  },

  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
