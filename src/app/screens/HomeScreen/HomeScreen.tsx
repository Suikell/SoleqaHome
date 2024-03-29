import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Text } from 'react-native-paper'
import { CategoriesProvider } from 'src/app/shared/contexts/CategoriesProvider'

import { Title } from '~screens/HomeScreen/components/Title'
import { FavoriteActuators } from '~ui/Actuator/components/FavoriteActuators'
import { CategoryNavigation } from '~ui/Category/CategoryNavigation'
import { FavoriteSensors } from '~ui/Sensor/components/FavoriteSensors'
import { shrink } from '~utils/helpers/shrink'

export const HomeScreen = () => {
  // const { logout } = useAuthCtx()

  // const [is, setIs] = React.useState(false)

  // React.useEffect(() => {
  //   if (is) {
  //     setIs(false)
  //   }
  // }, [is])

  return (
    <CategoriesProvider>
      <View style={styles.container}>
        <Appbar.Header dark style={styles.header}>
          <Title />
          <Appbar.Action icon={`bell-outline`} />
        </Appbar.Header>
        <View style={styles.content}>
          <CategoryNavigation />
          {/* <Button onPress={() => setIs(true)}>Toggle subscription</Button> */}

          {/* {is && <Test />} */}

          {/* <SensorList showOnlyCritical /> */}
          {/* <ScrollView> */}
          <Text variant={`titleLarge`}>Favourites</Text>
          <FavoriteSensors />
          <FavoriteActuators />
          {/* </ScrollView> */}
          {/* <Button onPress={logout}>Logout</Button> */}
        </View>
      </View>
    </CategoriesProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  content: {
    margin: shrink(48),
    gap: shrink(48),
  },
  header: {
    justifyContent: 'space-between',
  },
})
