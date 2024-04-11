import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

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
  const { presentStatusToast } = useStatusToastCtx()

  const { data, error } = useSNotificationsCount()
  const [mReadNotifications] = useMReadNotifications()

  const [count, setCount] = React.useState<number>(0)

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error.message)

      return
    }

    if (data) {
      setCount(data.notificationUnreadCount)
    }
  }, [data, error, presentStatusToast])

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
