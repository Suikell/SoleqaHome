import { useQNotifications } from '~graphql/generated/graphql'

// type TNotifications = Defined<TQNotifications['result']>['notifications']

export const useNotifications = () => {
  const { data, loading } = useQNotifications()

  if (data?.result?.notifications) {
    return { notifications: data.result.notifications, loading }
  }

  return { notifications: [], loading }
}
