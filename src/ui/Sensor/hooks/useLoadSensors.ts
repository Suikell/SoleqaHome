import * as React from 'react'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import {
  TFSensorBase,
  TQSensors,
  useQSensors,
} from '../../../graphql/generated/graphql'

// type TProps = NoChildren
type TSensors = TQSensors['categories']

export const useLoadSensors = () => {
  const { setFavoriteSensor } = useDeviceUpdaters()

  const [sensorCategories, setSensorCategories] =
    React.useState<Nullable<TSensors>>(null)

  const { data, error, loading } = useQSensors({
    fetchPolicy: 'cache-and-network',
  })

  // TODO: handle errors

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }
    setSensorCategories(data.categories)
    // if (!data?.category) return

    // setSensors(data.sensors)
  }, [data, error])

  const setSensorFavoriteValue = (sensor: TFSensorBase, favorite: boolean) => {
    if (!sensor || !sensor.id) return

    setSensorCategories((prev) => {
      if (!prev) return prev

      return prev.map((category) =>
        category.id === sensor.category?.id
          ? {
              ...category,
              sensors: category.sensors
                ? category.sensors.map((s) =>
                    s.id === sensor.id ? { ...s, favorite } : s,
                  )
                : category.sensors,
            }
          : category,
      )
    })
    setFavoriteSensor({ sensorId: sensor.id, favorite })
  }

  return { sensorCategories, setSensorFavoriteValue, loading }
}
