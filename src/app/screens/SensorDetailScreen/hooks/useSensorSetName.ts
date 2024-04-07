import * as React from 'react'

import { useMSetSensorName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useSensorSetName = () => {
  const [mSetSensorName] = useMSetSensorName()

  const [sensorName, setName] = React.useState<Nullable<string>>(null)

  const setSensorName = React.useCallback(
    async (id: ID, newName: string) => {
      mSetSensorName({
        variables: { id, name: newName },
      })
        .then(({ data }) => {
          const sensor = data?.result?.sensor
          if (isDefined(sensor)) {
            setName(sensor.name)
          }
        })
        .catch((error) => {
          console.log('error', error)
          setName(null)
        })
    },
    [mSetSensorName],
  )

  return { sensorName, setSensorName }
}
