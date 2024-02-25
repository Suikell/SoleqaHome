import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Button } from 'react-native-paper'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import { Title } from '~screens/HomeScreen/components/Title'
import { Test } from '~screens/HomeScreen/Test'
import { SensorCard } from '~ui/SensorCard/SensorCard'
import { shrink } from '~utils/helpers/shrink'

export const HomeScreen = () => {
  const { logout } = useAuthCtx()

  const [is, setIs] = React.useState(false)

  React.useEffect(() => {
    if (is) {
      setIs(false)
    }
  }, [is])

  return (
    <View style={styles.container}>
      <Appbar.Header dark style={styles.header}>
        <Title />
        <Appbar.Action icon={`bell-outline`} />
      </Appbar.Header>

      <Button onPress={() => setIs(true)}>Toggle subscription</Button>

      {is && <Test />}

      <View style={styles.sensors}>
        <SensorCard />
        <SensorCard />
      </View>
      <Button onPress={logout}>Logout</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-between',
  },
  sensors: {
    margin: shrink(48),
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  header: {
    justifyContent: 'space-between',
  },
})
