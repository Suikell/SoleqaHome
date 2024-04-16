import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  useMReadNotifications,
  useQNotificationsCount,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TContextValue = {
  count: number
  readNotifications: () => void
  setUnreadNotificationsCount: (count: number) => void
}

const [
  Provider, //
  useNotificationsCtx,
] = createContext<TContextValue>(`Notifications`)

type TProps = RequiredChildren

export const NotificationsProvider: React.FC<TProps> = ({ children }) => {
  const { presentStatusToast } = useStatusToastCtx()
  const [count, setCount] = React.useState<number>(0)

  const [mReadNotifications] = useMReadNotifications()
  const { data, error } = useQNotificationsCount()

  React.useEffect(() => {
    const unreadCount = data?.notifications?.unreadCount
    if (unreadCount) {
      setCount(unreadCount)
    }

    if (error) {
      presentStatusToast(
        'error',
        `Failed to fetch notifications count. ${error.message}`,
      )
    }
  }, [data?.notifications?.unreadCount, error, presentStatusToast])

  const setUnreadNotificationsCount = React.useCallback((count: number) => {
    setCount(count)
  }, [])

  const readNotifications = React.useCallback(() => {
    mReadNotifications()
      .then(({ data }) => {
        const success = Boolean(data?.result?.success)
        if (success) {
          setCount(0)
        }
      })
      .catch((error) => {
        presentStatusToast(
          'error',
          `Failed to read notifications. ${error.message}`,
        )
      })
  }, [mReadNotifications, presentStatusToast])

  return (
    <Provider value={{ count, readNotifications, setUnreadNotificationsCount }}>
      {children}
    </Provider>
  )
}

export { useNotificationsCtx }
