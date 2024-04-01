import * as React from 'react'
import { useDeviceUpdatersCtx } from 'src/app/shared/contexts/CategoriesProvider'

import {
  useMSetFavoriteActuator,
  useMSetFavoriteSensor,
} from '~graphql/generated/graphql'

export const useDeviceUpdaters = () => {
  const { updateSensor, updateActuator } = useDeviceUpdatersCtx()
  const [mFavoriteActuator] = useMSetFavoriteActuator()
  const [mFavoriteSensor] = useMSetFavoriteSensor()

  const setFavoriteSensor = React.useCallback(
    async (sensorId: ID, favorite: boolean) => {
      const { data, errors } = await mFavoriteSensor({
        variables: {
          sensorId,
          favorite,
        },
      })

      if (errors || !data?.result?.sensor) {
        console.log(
          'problem with setting favorite sensor ..',
          errors,
          data?.result,
        )
        return
      }

      const updatedSensor = data.result.sensor
      updateSensor(updatedSensor)
    },
    [mFavoriteSensor, updateSensor],
  )

  const setFavoriteActuator = React.useCallback(
    async (actuatorId: ID, favorite: boolean) => {
      const { data, errors } = await mFavoriteActuator({
        variables: {
          actuatorId,
          favorite,
        },
      })

      if (errors || !data?.result?.actuator) {
        console.log(
          'problem with setting favorite sensor ..',
          errors,
          data?.result,
        )
        return
      }
      const updatedActuator = data.result.actuator
      updateActuator(updatedActuator)
    },
    [mFavoriteActuator, updateActuator],
  )

  return { setFavoriteSensor, setFavoriteActuator }
}
