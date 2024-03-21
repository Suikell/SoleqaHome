import * as React from 'react'
import { IconButton } from 'react-native-paper'

import { Card } from '~ui/Cards/Card'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = Children & {
  favorite?: boolean
  setFavorite: () => void
  label: PropsOf<typeof Card>['title']
  onPress?: PropsOf<typeof Card>['onPress']
}

export const DeviceCard: React.FC<TProps> = ({
  label,
  onPress,
  favorite,
  children,
  setFavorite,
}) => {
  const rightAction = React.useMemo(() => {
    if (!isDefined(favorite)) return null

    return (
      <IconButton
        onPress={setFavorite}
        icon={`cards-heart${favorite ? `` : `-outline`}`}
      />
    )
  }, [favorite, setFavorite])

  return (
    <Card onPress={onPress} title={label} rightAction={rightAction}>
      {children}
    </Card>
  )
}
