import * as React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

import { TNavigationProps } from '~navigation/types'
import { useLoadActuatorDetail } from '~screens/ActuatorDetailScreen/hooks/useLoadActuatorDetail'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'
import { StatusInfo } from '~ui/Battery/StatusInfo'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = TNavigationProps<'ActuatorDetail'>

export const ActuatorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, actuatorId } = route.params
  console.log('hello')
  const { actuator, loading } = useLoadActuatorDetail(actuatorId)
  console.log(actuator)
  return (
    <>
      <DetailAppBar title={name} />
      {loading && <LoadingIndicator />}

      {!loading && actuator && (
        <View>
          <Text>{getStateString(actuator.currentState)}</Text>
          <StatusInfo
            isOnline={actuator.isOnline}
            batteryLevel={actuator.batteryLevel}
          />
        </View>
      )}
    </>
  )
}

// * HELPERS

const getStateString = (state?: Nullable<boolean>) => {
  if (!isDefined(state)) return 'Unknown'
  return state ? 'ON' : 'OFF'
}
