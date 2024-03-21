import * as React from 'react'
import { View } from 'react-native'

import { Battery } from '~ui/Battery/Battery'
import { Online } from '~ui/Battery/Online'

type TBatteryProps = PropsOf<typeof Battery>
type TOnlineProps = PropsOf<typeof Online>
type TProps = NoChildren & TBatteryProps & TOnlineProps

export const StatusInfo: React.FC<TProps> = ({ isOnline, batteryLevel }) => {
  return (
    <View>
      <Battery batteryLevel={batteryLevel} />
      <Online isOnline={isOnline} />
    </View>
  )
}
