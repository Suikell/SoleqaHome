import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

import { useNavigation } from '~navigation/hooks/useNavigation'
import { TRootStackParamList } from '~navigation/types'
import { TABLE_ROW_PADDING } from '~styles/spacing'

type TNavigationActuatorProps = TRootStackParamList['ActuatorDetail']

type ActuatorDetailProps = RequiredChildren & TNavigationActuatorProps

export const ActuatorDetailLink: React.FC<ActuatorDetailProps> = ({
  children,
  ...navigationProps
}) => {
  const navigation = useNavigation()

  const onLinkPress = () => {
    navigation.navigate('ActuatorDetail', navigationProps)
  }

  return <NavigationLink onLinkPress={onLinkPress}>{children}</NavigationLink>
}

type TNavigationSensorProps = TRootStackParamList['SensorDetail']
type SensorDetailProps = RequiredChildren & TNavigationSensorProps

export const SensorDetailLink: React.FC<SensorDetailProps> = ({
  children,
  ...navigationProps
}) => {
  const navigation = useNavigation()

  const onLinkPress = () => {
    navigation.navigate('SensorDetail', navigationProps)
  }

  return <NavigationLink onLinkPress={onLinkPress}>{children}</NavigationLink>
}

type TProps = RequiredChildren & {
  onLinkPress: () => void
}

/**
 * NavigationLink component with styled text and onPress handler.
 */
const NavigationLink: React.FC<TProps> = ({ onLinkPress, children }) => {
  const [isPressed, setIsPressed] = React.useState(false)

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onLinkPress}
      style={{
        width: `100%`,
        height: `100%`,
        justifyContent: `center`,
        paddingVertical: TABLE_ROW_PADDING,
      }}
    >
      <Text numberOfLines={1} style={isPressed ? styles.pressed : styles.link}>
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  link: {
    textDecorationLine: `underline`,
  },
  pressed: {
    opacity: 0.7,
  },
})
