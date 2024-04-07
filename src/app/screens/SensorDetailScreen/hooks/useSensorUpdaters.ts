import * as React from 'react'

import {
  useMSetCriticalOver,
  useMSetCriticalUnder,
} from '~graphql/generated/graphql'

export const useSensorUpdaters = (sensorId: ID) => {
  const [mSetCriticalUnder] = useMSetCriticalUnder()
  const [mSetCriticalOver] = useMSetCriticalOver()

  const setCriticalOver = React.useCallback(
    async (value?: number) => {
      const { data, errors } = await mSetCriticalOver({
        variables: { sensorId, value },
        refetchQueries: ['QSensorGraphValues'],
      })

      if (errors || !data) {
        // TODO - show toast
        console.log('error', errors)
        return
      }

      console.log('data', data.result?.success)
    },
    [mSetCriticalOver, sensorId],
  )

  const setCriticalUnder = React.useCallback(
    async (value?: number) => {
      const { data, errors } = await mSetCriticalUnder({
        variables: { sensorId, value },
        refetchQueries: ['QSensorGraphValues'],
      })

      if (errors || !data) {
        // TODO - show toast
        console.log('error', errors)
        return
      }

      console.log('data', data.result?.success)
    },
    [mSetCriticalUnder, sensorId],
  )

  return { setCriticalOver, setCriticalUnder }
}
