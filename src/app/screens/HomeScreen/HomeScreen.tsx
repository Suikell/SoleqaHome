import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Appbar, Badge } from 'react-native-paper'
import { useNotificationsCtx } from 'src/app/shared/components/NotificationsProvider'

import { useNavigation } from '~navigation/hooks/useNavigation'
import { HomeScreenContent } from '~screens/HomeScreen/components/HomeScreenContent'
import { Title } from '~screens/HomeScreen/components/Title'
import { FlexRow } from '~ui/Layout/FlexRow'

const ICON_SIZE = 30
export const HomeScreen = () => {
  const navigation = useNavigation()
  const { count, readNotifications } = useNotificationsCtx()
  return (
    <View style={styles.container}>
      <Appbar.Header dark style={styles.header}>
        <Title />
        <FlexRow marginRight={12}>
          <Appbar.Action
            size={ICON_SIZE}
            icon={`cog-outline`}
            onPress={() => navigation.navigate('Settings')}
          />

          <View style={{ position: 'relative' }}>
            <Appbar.Action
              icon={`bell-outline`}
              size={ICON_SIZE}
              onPress={() => {
                readNotifications()
                navigation.navigate('Notifications')
              }}
            />
            <Badge
              visible={count > 0}
              size={24}
              style={{
                position: 'absolute',
                top: 5,
                right: 0,
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              {count}
            </Badge>
          </View>
        </FlexRow>
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
