import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TRootStackParamList = {
  HomeTabs: undefined
  SensorDetail: {
    sensorId: ID
    name: string
  }
}

export type TScreenName = keyof TRootStackParamList

/**
 * navigation (screen) props typed with specific screen names defined above – used as SCREEN-level component props
 */
export type TNavigationProps<ScreenName extends TScreenName> =
  NativeStackScreenProps<TRootStackParamList, ScreenName>
