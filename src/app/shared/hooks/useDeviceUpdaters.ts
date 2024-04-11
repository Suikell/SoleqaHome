import * as React from 'react'
import { useDeviceUpdatersCtx } from 'src/app/shared/contexts/CategoriesProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  useMSetFavoriteActuator,
  useMSetFavoriteSensor,
  useMSetManualOverride,
} from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useDeviceUpdaters = () => {
  const { presentStatusToast } = useStatusToastCtx()

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
          presentStatusToast(
            'error',
            `Failed to set sensor favorite. ${error.message}`,
          )
        })
    },
    [mFavoriteSensor, presentStatusToast, updateSensor],
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
          presentStatusToast(
            'error',
            `Failed to set actuator favorite. ${error.message}`,
          )
        })
    },
    [mFavoriteActuator, presentStatusToast, updateActuator],
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
          presentStatusToast(
            'error',
            `Failed to set manual override. ${error.message}`,
          )
        })
    },
    [mManualOverride, presentStatusToast, updateActuator],
  )

  return { setFavoriteSensor, setFavoriteActuator, setManualOverride }
}
