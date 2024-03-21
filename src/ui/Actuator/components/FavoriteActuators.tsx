import * as React from 'react'
import {
  useCategoriesCtx,
  useDeviceUpdatersCtx,
} from 'src/app/shared/contexts/CategoriesProvider'

import { ActuatorList } from '~ui/Actuator/components/ActuatorList'

type TProps = NoChildren

export const FavoriteActuators: React.FC<TProps> = () => {
  const { selectedCategoryIndex, favoriteActuators } = useCategoriesCtx()
  const { setFavoriteActuatorValue } = useDeviceUpdatersCtx()

  const actuators = React.useMemo(() => {
    if (selectedCategoryIndex === 0) {
      return favoriteActuators
    }
    return favoriteActuators.filter(
      (actuator) => actuator.category?.id === selectedCategoryIndex,
    )
  }, [favoriteActuators, selectedCategoryIndex])

  return (
    <ActuatorList
      actuators={actuators}
      setFavoriteActuatorValue={setFavoriteActuatorValue}
    />
  )
}
