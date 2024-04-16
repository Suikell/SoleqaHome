import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BG_COLOR } from 'App'
import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TRootStackParamList } from '~navigation/types'
import { ActuatorDetailScreen } from '~screens/ActuatorDetailScreen/ActuatorDetailScreen'
import { ActuatorsScreen } from '~screens/ActuatorsScreen/ActuatorsScreen'
import { AddControlledActuatorScreen } from '~screens/AddControlledActuatorScreen/AddControlledActuatorScreen'
import { CreateConditionScreen } from '~screens/CreateConditionScreen/CreateConditionScreen'
import { GroupDetailScreen } from '~screens/GroupDetailScreen/GroupDetailScreen'
import { GroupsScreen } from '~screens/GroupsScreen/GroupsScreen'
import { HomeScreen } from '~screens/HomeScreen/HomeScreen'
import { NotificationsScreen } from '~screens/NotificationsScreen/NotificationsScreen'
import { SensorDetailScreen } from '~screens/SensorDetailScreen/SensorDetailScreen'
import { SensorsScreen } from '~screens/SensorsScreen/SensorsScreen'
import { SettingsScreen } from '~screens/SettingsScreen/SettingsScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator<TRootStackParamList>()

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: BG_COLOR,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key]
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 })
            }

            return null
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key]
            const label =
              (options.tabBarLabel as string) || (options.title as string)
            return label
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // unmountOnBlur: true,
          tabBarLabel: 'Home',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Sensors"
        component={SensorsScreen}
        options={{
          // unmountOnBlur: true,

          tabBarLabel: 'Sensors',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="access-point" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Actuators"
        component={ActuatorsScreen}
        options={{
          tabBarLabel: 'Actuators',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="electric-switch" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Groups',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="group" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: BG_COLOR },
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="SensorDetail" component={SensorDetailScreen} />
      <Stack.Screen name="ActuatorDetail" component={ActuatorDetailScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
      <Stack.Screen name="CreateCondition" component={CreateConditionScreen} />
      <Stack.Screen
        name="AddControlledActuator"
        component={AddControlledActuatorScreen}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  )
}
