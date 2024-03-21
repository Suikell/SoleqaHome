import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'

import { TNavigationProps } from '~navigation/types'
import { SensorGraph } from '~screens/SensorDetailScreen/components/SensorGraph'
import { useLoadSensorDetail } from '~screens/SensorDetailScreen/hooks/useLoadSensorDetail'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { FlexRow } from '~ui/Layout/FlexRow'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { SensorValue } from '~ui/Sensor/components/SensorValue'
import { shrink } from '~utils/helpers/shrink'

type TProps = TNavigationProps<'SensorDetail'>

export const SensorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { custom: customColors } = useAppTheme()
  const { name, sensorId } = route.params

  const { sensor, loading } = useLoadSensorDetail(sensorId)

  return (
    <>
      <DetailAppBar title={name} />
      {loading && <LoadingIndicator />}

      {!loading && (
        <>
          <FlexRow
            justifyContent={`space-between`}
            marginRight={shrink(48)}
            marginTop={shrink(48)}
          >
            <SensorValue
              value={sensor?.currentValue ?? null}
              unitType={sensor?.unitType ?? null}
              valueVariant={`displayMedium`}
              unitVariant={`displaySmall`}
            />
            <StatusInfo
              isOnline={sensor?.isOnline}
              batteryLevel={sensor?.batteryLevel ?? null}
            />
          </FlexRow>
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
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
})
