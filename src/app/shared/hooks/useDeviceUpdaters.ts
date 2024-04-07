import * as React from 'react'
import { useDeviceUpdatersCtx } from 'src/app/shared/contexts/CategoriesProvider'

import {
  useMSetFavoriteActuator,
  useMSetFavoriteSensor,
  useMSetManualOverride,
} from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useDeviceUpdaters = () => {
  const { updateSensor, updateActuator } = useDeviceUpdatersCtx()
  const [mFavoriteActuator] = useMSetFavoriteActuator()
  const [mFavoriteSensor] = useMSetFavoriteSensor()
  const [mManualOverride] = useMSetManualOverride()

  const setFavoriteSensor = React.useCallback(
    (sensorId: ID, favorite: boolean) => {
      mFavoriteSensor({
        variables: {
          sensorId,
          favorite,
        },
      })
        .then(({ data }) => {
          const updatedSensor = data?.result?.sensor
          if (isDefined(updatedSensor)) {
            updateSensor(updatedSensor)
          }
        })
        .catch((error) => {
          console.error('mFavoriteSensor threw an error', error)
        })
    },
    [mFavoriteSensor, updateSensor],
  )

  const setFavoriteActuator = React.useCallback(
    (actuatorId: ID, favorite: boolean) => {
      mFavoriteActuator({
        variables: {
          actuatorId,
          favorite,
        },
      })
        .then(({ data }) => {
          const updatedActuator = data?.result?.actuator
          if (isDefined(updatedActuator)) {
            updateActuator(updatedActuator)
          }
        })
        .catch((error) => {
          console.error('mFavoriteActuator threw an error', error)
        })
    },
    [mFavoriteActuator, updateActuator],
  )

  const setManualOverride = React.useCallback(
    (actuatorId: ID, state?: boolean, until?: Date) => {
      mManualOverride({
        variables: {
          actuatorId,
          until,
          value: state,
        },
      })
        .then(({ data }) => {
          const updatedActuator = data?.result?.actuator
          if (isDefined(updatedActuator)) {
            updateActuator(updatedActuator)
          }
        })
        .catch((error) => {
          console.error('mManualOverride threw an error', error)
        })
    },
    [mManualOverride, updateActuator],
  )

  return { setFavoriteSensor, setFavoriteActuator, setManualOverride }
}
