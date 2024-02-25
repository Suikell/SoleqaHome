// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // import { CommonActions } from '@react-navigation/native'
// // import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'

import { ActuatorsScreen } from '~screens/ActuatorsScreen/ActuatorsScreen'
import { GroupsScreen } from '~screens/GroupsScreen/GroupsScreen'
import { HomeScreen } from '~screens/HomeScreen/HomeScreen'
import { SensorsScreen } from '~screens/SensorsScreen/SensorsScreen'

export const Navigation = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    { key: 'sensors', title: 'Sensors', focusedIcon: 'album' },
    { key: 'actuators', title: 'Actuators', focusedIcon: 'album' },
    { key: 'groups', title: 'Groups', focusedIcon: 'album' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    sensors: SensorsScreen,
    actuators: ActuatorsScreen,
    groups: GroupsScreen,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}
