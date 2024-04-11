import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  useMSetCriticalOver,
  useMSetCriticalUnder,
} from '~graphql/generated/graphql'

export const useSensorUpdaters = (sensorId: ID) => {
  const { presentStatusToast } = useStatusToastCtx()

  const [mSetCriticalUnder] = useMSetCriticalUnder()
  const [mSetCriticalOver] = useMSetCriticalOver()

  const setCriticalOver = React.useCallback(
    async (value?: number) => {
      const { errors, data } = await mSetCriticalOver({
        variables: { sensorId, value },
        refetchQueries: ['QSensorGraphValues'],
      })

      if (errors) {
        presentStatusToast('error', errors[0].message)
      }
      if (!data?.result?.success) {
        presentStatusToast('error', 'Failed to set critical over value.')
      }
    },
    [mSetCriticalOver, presentStatusToast, sensorId],
  )

  const setCriticalUnder = React.useCallback(
    async (value?: number) => {
      const { data, errors } = await mSetCriticalUnder({
        variables: { sensorId, value },
        refetchQueries: ['QSensorGraphValues'],
      })

      if (errors) {
        presentStatusToast('error', errors[0].message)
      }
      if (!data?.result?.success) {
        presentStatusToast('error', 'Failed to set critical under value.')
      }
    },
    [mSetCriticalUnder, presentStatusToast, sensorId],
  )

  return { setCriticalOver, setCriticalUnder }
}
