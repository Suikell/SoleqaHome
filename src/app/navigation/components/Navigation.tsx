import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BG_COLOR } from 'App'
import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { TRootStackParamList } from '~navigation/types'
import { ActuatorsScreen } from '~screens/ActuatorsScreen/ActuatorsScreen'
import { GroupsScreen } from '~screens/GroupsScreen/GroupsScreen'
import { HomeScreen } from '~screens/HomeScreen/HomeScreen'
import { SensorDetailScreen } from '~screens/SensorDetailScreen/SensorDetailScreen'
import { SensorsScreen } from '~screens/SensorsScreen/SensorsScreen'

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
          unmountOnBlur: true,
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
          unmountOnBlur: true,

          tabBarLabel: 'Sensors',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />
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
            return <Icon name="cog" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Groups',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />
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
    </Stack.Navigator>
  )
}
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { CommonActions } from '@react-navigation/native'
// import * as React from 'react'
// import { BottomNavigation } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// import { ActuatorsScreen } from '~screens/ActuatorsScreen/ActuatorsScreen'
// import { GroupsScreen } from '~screens/GroupsScreen/GroupsScreen'
// import { HomeScreen } from '~screens/HomeScreen/HomeScreen'
// import { SensorDetailScreen } from '~screens/SensorsScreen/SensorDetailScreen'
// import { SensorsScreen } from '~screens/SensorsScreen/SensorsScreen'

// const Tab = createBottomTabNavigator()
// export const Navigation = () => {

//   )
// }

// // // // import { CommonActions } from '@react-navigation/native'
// // // // import { createNativeStackNavigator } from '@react-navigation/native-stack'
// // import * as React from 'react'
// // import { BottomNavigation } from 'react-native-paper'

// // import { ActuatorsScreen } from '~screens/ActuatorsScreen/ActuatorsScreen'
// // import { GroupsScreen } from '~screens/GroupsScreen/GroupsScreen'
// // import { HomeScreen } from '~screens/HomeScreen/HomeScreen'
// // import { SensorScreen } from '~screens/SensorsScreen/SensorScreen'
// // import { SensorsScreen } from '~screens/SensorsScreen/SensorsScreen'

// // export const Navigation = () => {
// //   const [index, setIndex] = React.useState(0)
// //   const [routes] = React.useState([
// //     {
// //       key: 'home',
// //       title: 'Home',
// //       focusedIcon: 'heart',
// //       unfocusedIcon: 'heart-outline',
// //     },
// //     { key: 'sensors', title: 'Sensors', focusedIcon: 'album' },
// //     { key: 'actuators', title: 'Actuators', focusedIcon: 'album' },
// //     { key: 'groups', title: 'Groups', focusedIcon: 'album' },
// //   ])

// //   const renderScene = BottomNavigation.SceneMap({
// //     test: SensorScreen,
// //     home: HomeScreen,
// //     sensors: SensorsScreen,
// //     actuators: ActuatorsScreen,
// //     groups: GroupsScreen,
// //   })

// //   return (
// //     <BottomNavigation
// //       navigationState={{ index, routes }}
// //       onIndexChange={setIndex}
// //       renderScene={renderScene}
// //     />
// //   )
// // }
