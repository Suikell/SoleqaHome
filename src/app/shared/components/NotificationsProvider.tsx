import * as React from 'react'

import {
  useMReadNotifications,
  useSNotificationsCount,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TContextValue = {
  count: number
  readNotifications: () => void
}

const [
  Provider, //
  useNotificationsCtx,
] = createContext<TContextValue>(`Notifications`)

type TProps = RequiredChildren

export const NotificationsProvider: React.FC<TProps> = ({ children }) => {
  const result = useSNotificationsCount()
  const [mReadNotifications] = useMReadNotifications()

  const [count, setCount] = React.useState<number>(0)

  React.useEffect(() => {
    console.log('notif ..', result)
    if (result.error) {
      return
    }

    if (result.data) {
      setCount(result.data.notificationUnreadCount)
    }
  }, [result])

  const readNotifications = React.useCallback(() => {
    mReadNotifications()
      .then(({ data }) => {
        const success = Boolean(data?.result?.success)
        if (success) {
          setCount(0)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
  }, [mReadNotifications])

  return <Provider value={{ count, readNotifications }}>{children}</Provider>
}

export { useNotificationsCtx }
