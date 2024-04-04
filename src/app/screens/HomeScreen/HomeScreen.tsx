import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar } from 'react-native-paper'

import { HomeScreenContent } from '~screens/HomeScreen/components/HomeScreenContent'
import { Title } from '~screens/HomeScreen/components/Title'

export const HomeScreen = () => {
  // const { logout } = useAuthCtx()

  // const [is, setIs] = React.useState(false)

  // React.useEffect(() => {
  //   if (is) {
  //     setIs(false)
  //   }
  // }, [is])

  return (
    <View style={styles.container}>
      <Appbar.Header dark style={styles.header}>
        <Title />
        <Appbar.Action icon={`bell-outline`} />
      </Appbar.Header>
      <HomeScreenContent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
  },
})
