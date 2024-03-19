import * as React from 'react'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import {
  TFActuatorBase,
  TFSensorBase,
  TQCategories,
  useQCategories,
} from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

export type TCategories = TQCategories['categories']

const allEmptyCategoryId: ID = 0

export const useCategoriesState = () => {
  const { data } = useQCategories()
  const { setFavoriteSensor, setFavoriteActuator } = useDeviceUpdaters()

  const [categories, setCategories] = React.useState<TCategories>([])

  const [favoriteSensors, setFavoriteSensors] = React.useState<
    RoA<TFSensorBase>
  >([])
  const [favoriteActuators, setFavoriteActuators] = React.useState<
    RoA<TFActuatorBase>
  >([])

  const [selectedCategoryIndex, setSelectCategoryIndex] =
    React.useState<ID>(allEmptyCategoryId)

  const selectCategoryIndex = React.useCallback((categoryId: ID) => {
    setSelectCategoryIndex(categoryId)
  }, [])

  // TODO - refactor and optimize this, you should not copy all categories into one, but just use all of them
  React.useEffect(() => {
    if (data?.categories) {
      // const allCategory: TCategory = {
      //   ...allEmptyCategory,
      //   favoriteSensors: getAllFavoriteSensors(data.categories),
      //   favoriteActuators: getAllFavoriteActuators(data.categories),
      //   criticalSensors: getAllCriticalSensors(data.categories),
      // }

      // selectCategory(allCategory)

      const favoriteSensorsMap = data.categories
        .flatMap((category) => {
          if (!category.id || !category.favoriteSensors) return null

          return category.favoriteSensors
        })
        .filter(isDefined)

      const favoriteActuatorsMap = data.categories
        .flatMap((category) => {
          if (!category.id || !category.favoriteActuators) return null
          return category.favoriteActuators
        })
        .filter(isDefined)

      setFavoriteSensors(favoriteSensorsMap)
      setFavoriteActuators(favoriteActuatorsMap)
      setCategories(data.categories)
    }
  }, [data?.categories])

  const addFavoriteActuator = React.useCallback((actuator: TFActuatorBase) => {
    setFavoriteActuators((prev) => [...prev, actuator])
  }, [])

  const addFavoriteSensor = React.useCallback((sensor: TFSensorBase) => {
    setFavoriteSensors((prev) => [...prev, sensor])
  }, [])

  const removeFavoriteSensor = React.useCallback((sensor: TFSensorBase) => {
    setFavoriteSensors((prev) => prev.filter((item) => item.id !== sensor.id))
  }, [])

  const removeFavoriteActuator = React.useCallback(
    (actuator: TFActuatorBase) => {
      setFavoriteActuators((prev) =>
        prev.filter((item) => item.id !== actuator.id),
      )
    },
    [],
  )

  const setFavoriteSensorValue = React.useCallback(
    (sensor: TFSensorBase, favorite: boolean) => {
      if (!sensor.id) return

      setFavoriteSensor({ sensorId: sensor.id, favorite })

      if (!favorite) {
        removeFavoriteSensor(sensor)
        return
      }
      addFavoriteSensor(sensor)
    },
    [addFavoriteSensor, removeFavoriteSensor, setFavoriteSensor],
  )

  const setFavoriteActuatorValue = React.useCallback(
    (actuator: TFActuatorBase, favorite: boolean) => {
      if (!actuator.id) return

      setFavoriteActuator({ actuatorId: actuator.id, favorite })

      if (!favorite) {
        removeFavoriteActuator(actuator)
        return
      }
      addFavoriteActuator(actuator)
    },
    [addFavoriteActuator, removeFavoriteActuator, setFavoriteActuator],
  )

  return {
    categories,
    selectedCategoryIndex,
    selectCategoryIndex,
    favoriteSensors,
    favoriteActuators,
    setFavoriteActuatorValue,
    setFavoriteSensorValue,
  }
}
