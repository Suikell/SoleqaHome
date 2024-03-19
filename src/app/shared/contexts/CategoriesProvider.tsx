import * as React from 'react'
import { useCategoriesState } from 'src/app/shared/hooks/useCategoriesState'

import { createContext } from '~utils/context/createContext'

type TStateContext = Pick<
  ReturnType<typeof useCategoriesState>,
  | 'categories'
  | 'selectedCategoryIndex'
  | 'favoriteSensors'
  | 'favoriteActuators'
  | 'selectCategoryIndex'
>

type TUpdatersContext = Pick<
  ReturnType<typeof useCategoriesState>,
  'setFavoriteActuatorValue' | 'setFavoriteSensorValue'
>

const [
  Provider, //
  useCategoriesCtx,
] = createContext<TStateContext>(`CategoriesState`)

const [
  UpdatersProvider, //
  useDeviceUpdatersCtx,
] = createContext<TUpdatersContext>(`DeviceUpdaters`)

type TProps = RequiredChildren

/**
 * provides state & data for ProductDetail
 *  - `useProductDetailStateCtx` returns dynamic state of the detail, like selected addons
 *  - `useProductDetailUpdatersCtx` returns memoized functions used to update the state
 */

const CategoriesProvider: React.FC<TProps> = ({ children }) => {
  const {
    categories,
    favoriteActuators,
    favoriteSensors,
    selectedCategoryIndex,
    selectCategoryIndex,
    setFavoriteActuatorValue,
    setFavoriteSensorValue,
  } = useCategoriesState()

  const updaters = React.useMemo<TUpdatersContext>(() => {
    return {
      setFavoriteActuatorValue,
      setFavoriteSensorValue,
    }
  }, [setFavoriteActuatorValue, setFavoriteSensorValue])

  return (
    <Provider
      value={{
        categories,
        selectCategoryIndex,
        selectedCategoryIndex,
        favoriteActuators,
        favoriteSensors,
      }}
    >
      <UpdatersProvider value={updaters}>{children}</UpdatersProvider>
    </Provider>
  )
}

export { CategoriesProvider, useCategoriesCtx, useDeviceUpdatersCtx }

//* HELPERS

// const getAllFavoriteSensors = (categories: Defined<TCategories>) => {
//   return categories?.flatMap((category) => category.favoriteSensors || [])
// }

// const getAllFavoriteActuators = (categories: Defined<TCategories>) => {
//   return categories?.flatMap((category) => category.favoriteActuators || [])
// }

// const getAllCriticalSensors = (categories: Defined<TCategories>) => {
//   return categories?.flatMap((category) => category.criticalSensors || [])
// }
