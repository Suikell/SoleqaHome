import * as React from 'react'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { ActuatorList } from '~ui/Actuator/components/ActuatorList'

type TProps = NoChildren

export const FavoriteActuators: React.FC<TProps> = () => {
  const { selectedCategoryIndex, favoriteActuators } = useCategoriesCtx()

  const actuators = React.useMemo(() => {
    if (selectedCategoryIndex === 0) {
      return favoriteActuators
    }
    return favoriteActuators.filter(
      (actuator) => actuator.category?.id === selectedCategoryIndex,
    )
  }, [favoriteActuators, selectedCategoryIndex])

  return <ActuatorList actuators={actuators} />
}
