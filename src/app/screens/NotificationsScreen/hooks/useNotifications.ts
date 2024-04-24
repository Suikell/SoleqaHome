import { useQNotifications } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useNotifications = () => {
  const { data, loading } = useQNotifications()

  if (data?.result?.notifications) {
    const notifications = data.result.notifications.filter(isDefined)
    return { notifications, loading }
  }

  return { notifications: [], loading }
}
