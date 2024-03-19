import * as React from 'react'

import {
  useMSetFavoriteActuator,
  useMSetFavoriteSensor,
} from '~graphql/generated/graphql'

type TFavoriteActuatorOptions = {
  actuatorId: ID
  favorite: boolean
}

type TFavoriteSensorOptions = {
  sensorId: ID
  favorite: boolean
}

// type TProps = {
//   setCategories: ReturnType<typeof useCategoriesState>['setCategories']
// }

export const useDeviceUpdaters = () => {
  const [mFavoriteActuator] = useMSetFavoriteActuator()
  const [mFavoriteSensor] = useMSetFavoriteSensor()

  const setFavoriteSensor = React.useCallback(
    async ({ sensorId, favorite }: TFavoriteSensorOptions) => {
      const { data, errors } = await mFavoriteSensor({
        variables: {
          sensorId,
          favorite,
        },
      })

      if (errors || !data || data.result?.success === false) {
        console.log(
          'problem with setting favorite sensor ..',
          errors,
          data?.result,
        )
      }
    },
    [mFavoriteSensor],
  )

  const setFavoriteActuator = React.useCallback(
    async ({ actuatorId, favorite }: TFavoriteActuatorOptions) => {
      const { data, errors } = await mFavoriteActuator({
        variables: {
          actuatorId,
          favorite,
        },
      })

      if (errors || !data || !data.result?.success === false) {
        console.log(
          'problem with setting favorite sensor ..',
          errors,
          data?.result,
        )
      }
    },
    [mFavoriteActuator],
  )

  return { setFavoriteSensor, setFavoriteActuator }
}
