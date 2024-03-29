import * as React from 'react'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import {
  TFActuatorBase,
  TQActuators,
  useQActuators,
} from '~graphql/generated/graphql'

// type TProps = NoChildren
type TActuators = TQActuators['categories']

export const useLoadActuators = () => {
  const { setFavoriteActuator } = useDeviceUpdaters()

  const [actuatorCategories, setActuatorCategories] =
    React.useState<Nullable<TActuators>>(null)

  const { data, error, loading } = useQActuators({
    fetchPolicy: 'cache-and-network',
  })

  // TODO: handle errors

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }
    setActuatorCategories(data.categories)
    // if (!data?.category) return

    // setSensors(data.sensors)
  }, [data, error])

  const setActuatorFavoriteValue = (
    actuator: TFActuatorBase,
    favorite: boolean,
  ) => {
    if (!actuator || !actuator.id) return

    setActuatorCategories((prev) => {
      if (!prev) return prev

      return prev.map((category) =>
        category.id === actuator.category?.id
          ? {
              ...category,
              actuators: category.actuators
                ? category.actuators.map((s) =>
                    s.id === actuator.id ? { ...s, favorite } : s,
                  )
                : category.actuators,
            }
          : category,
      )
    })
    setFavoriteActuator({ actuatorId: actuator.id, favorite })
  }

  return { actuatorCategories, setActuatorFavoriteValue, loading }
}
