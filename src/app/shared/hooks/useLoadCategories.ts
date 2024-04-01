import * as React from 'react'

import {
  TFActuatorBase,
  TFCategoryBase,
  TFSensorBase,
  useQCategories,
} from '~graphql/generated/graphql'

type TCategoryInfo = OmitSafe<TFCategoryBase, '__typename'>
type TCategory = TCategoryInfo & {
  sensorIds: RoA<ID>
  actuatorIds: RoA<ID>
}

export const useLoadCategories = () => {
  const [categories, setCategories] = React.useState<TCategory[]>([])
  const [sensors, setSensors] = React.useState<TFSensorBase[]>([])
  const [actuators, setActuators] = React.useState<TFActuatorBase[]>([])

  const { data, loading, error } = useQCategories()

  React.useEffect(() => {
    if (error || !data || !data.categories) {
      return
    }

    if (data) {
      const newCategories: TCategory[] = []
      const newSensors: TFSensorBase[] = []
      const newActuators: TFActuatorBase[] = []

      data.categories.forEach((category) => {
        if (!category) return

        const sensorIds =
          category.sensors?.map((sensor) => {
            newSensors.push(sensor)
            return sensor.id
          }) ?? []

        const actuatorIds =
          category.actuators?.map((actuator) => {
            newActuators.push(actuator)
            return actuator.id
          }) ?? []

        const categoryInfo: TCategoryInfo = {
          id: category.id,
          name: category.name,
          isOnline: category.isOnline,
          batteryLevel: category.batteryLevel,
        }

        newCategories.push({ ...categoryInfo, sensorIds, actuatorIds })
      })

      setCategories(newCategories)
      setSensors(newSensors)
      setActuators(newActuators)
    }
  }, [data, error, loading])

  return {
    loading,
    categories,
    sensors,
    actuators,
    setSensors,
    setActuators,
  }
}
