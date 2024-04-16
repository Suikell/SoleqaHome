import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useMSetSensorName } from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export const useSensorSetName = () => {
  const { presentStatusToast } = useStatusToastCtx()
  const { updateSensorName } = useCategoriesUpdatersCtx()

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
            updateSensorName(sensor.id, sensor.name)
          }
        })
        .catch((error) => {
          presentStatusToast(
            'error',
            `Failed to set sensor name. ${error.message}`,
          )
          setName(null)
        })
    },
    [mSetSensorName, presentStatusToast, updateSensorName],
  )

  return { sensorName, setSensorName }
}
