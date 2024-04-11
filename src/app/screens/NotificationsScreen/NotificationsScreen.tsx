import { useAppTheme } from 'App'
import { format } from 'date-fns'
import * as React from 'react'
import { ScrollView, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'

import { useNotifications } from '~screens/NotificationsScreen/hooks/useNotifications'
import { CONTENT_MARGIN } from '~styles/spacing'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { Headline } from '~ui/Text/Headline'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'

type TProps = NoChildren

export const NotificationsScreen: React.FC<TProps> = () => {
  const theme = useAppTheme()
  const { notifications, loading } = useNotifications()

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <>
      <SimpleAppBar title="Notifications" />
      <ScrollView
        style={{
          margin: CONTENT_MARGIN,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((notification) => {
          const date = format(notification.createdAt, 'dd/MM/yyyy HH:mm')
          return (
            <View key={notification.id}>
              <Text
                variant={`bodySmall`}
                style={{
                  color: theme.colors.outline,
                  alignSelf: 'flex-end',
                }}
              >
                {date}
              </Text>
              <View style={{ rowGap: 8 }}>
                <Headline text={toCapitalizedLowerCase(notification.title)} />
                <Text variant={`bodyMedium`}>{notification.body}</Text>
              </View>
              <Divider style={{ marginVertical: CONTENT_MARGIN }} />
            </View>
          )
        })}
      </ScrollView>
    </>
  )
}
