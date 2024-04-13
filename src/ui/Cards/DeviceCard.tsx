import { useAppTheme } from 'App'
import * as React from 'react'
import { IconButton } from 'react-native-paper'

import { Card } from '~ui/Cards/Card'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = Children & {
  isOnline: boolean
  favorite?: boolean
  setFavorite: () => void
  label: PropsOf<typeof Card>['title']
  onPress?: PropsOf<typeof Card>['onPress']
}

export const DeviceCard: React.FC<TProps> = ({
  isOnline,
  label,
  onPress,
  favorite,
  children,
  setFavorite,
}) => {
  const theme = useAppTheme()

  const rightAction = React.useMemo(() => {
    if (!isDefined(favorite)) return null

    return (
      <IconButton
        iconColor={
          isOnline ? theme.colors.onBackground : theme.colors.onSurfaceDisabled
        }
        onPress={setFavorite}
        icon={`cards-heart${favorite ? `` : `-outline`}`}
      />
    )
  }, [favorite, isOnline, setFavorite, theme])

  return (
    <Card
      disabled={!isOnline}
      onPress={onPress}
      title={label}
      rightAction={rightAction}
    >
      {children}
    </Card>
  )
}
