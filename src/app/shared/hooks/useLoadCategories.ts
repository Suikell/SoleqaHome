import * as React from 'react'

import {
  TFActuatorBase,
  TFCategoryBase,
  TFSensorBase,
  useQCategories,
} from '~graphql/generated/graphql'

type TCategoryInfo = OmitSafe<TFCategoryBase, '__typename'>
type TCategory = TCategoryInfo & {
  sensors: RoA<{
    id: ID
    name: string
    unit: string
  }>
  actuators: RoA<{
    id: ID
    name: string
  }>
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

        // TODO - repair unit when it will be fixed in the backend
        const categorySensors =
          category.sensors?.map((sensor) => {
            newSensors.push(sensor)
            return {
              id: sensor.id,
              name: sensor.name,
              unit: sensor.unitType || '',
            }
          }) ?? []

        const categoryActuators =
          category.actuators?.map((actuator) => {
            newActuators.push(actuator)
            return { id: actuator.id, name: actuator.name }
          }) ?? []

        const categoryInfo: TCategoryInfo = {
          id: category.id,
          name: category.name,
          isOnline: category.isOnline,
          batteryLevel: category.batteryLevel,
        }

        newCategories.push({
          ...categoryInfo,
          sensors: categorySensors,
          actuators: categoryActuators,
        })
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
