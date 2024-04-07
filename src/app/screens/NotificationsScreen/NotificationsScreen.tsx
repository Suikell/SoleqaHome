import * as React from 'react'

import { useNotifications } from '~screens/NotificationsScreen/hooks/useNotifications'
import { SimpleAppBar } from '~ui/Appbar/SimpleAppBar'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'

type TProps = NoChildren

export const NotificationsScreen: React.FC<TProps> = () => {
  const { notifications, loading } = useNotifications()

  if (loading) {
    ;<LoadingIndicator />
  }

  console.log('notifications', notifications)
  return <SimpleAppBar title="Notifications" />
}
