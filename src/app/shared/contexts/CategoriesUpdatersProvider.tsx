import * as React from 'react'
import { useCreateUpdaters } from 'src/app/shared/hooks/useCreateUpdaters'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import { TFActuatorBase, TFSensorBase } from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TUpdatersContext = {
  selectCategoryIndex: (categoryId: ID) => void
  setFavoriteActuatorValue: (
    actuatorId: ID,
    value: TFActuatorBase['favorite'],
  ) => void
  setFavoriteSensorValue: (
    sensorId: ID,
    value: TFSensorBase['favorite'],
  ) => void
  updateSensorCurrentValue: (
    sensorId: ID,
    value: TFSensorBase['currentValue'],
  ) => void
}

const [
  Provider, //
  useCategoriesUpdatersCtx,
] = createContext<TUpdatersContext>(`CategoriesUpdaters`)

type TCreateUpdatersProps = Parameters<typeof useCreateUpdaters>[0]

type TProps = RequiredChildren &
  TCreateUpdatersProps & {
    selectCategoryIndex: (categoryId: ID) => void
  }

const CategoriesUpdatersProvider: React.FC<TProps> = ({
  selectCategoryIndex,
  children,
  setSensors,
  setActuators,
}) => {
  const { setFavoriteSensor, setFavoriteActuator } = useDeviceUpdaters()
  const { useCreateSensorUpdater, useCreateActuatorUpdater } =
    useCreateUpdaters({ setSensors, setActuators })

  const updateSensorCurrentValue = useCreateSensorUpdater('currentValue')

  const setFavoriteSensorValue = useCreateSensorUpdater(
    'favorite',
    setFavoriteSensor,
  )
  const setFavoriteActuatorValue = useCreateActuatorUpdater(
    'favorite',
    setFavoriteActuator,
  )

  const updaters = React.useMemo<TUpdatersContext>(() => {
    return {
      selectCategoryIndex,
      updateSensorCurrentValue,
      setFavoriteActuatorValue,
      setFavoriteSensorValue,
    }
  }, [
    selectCategoryIndex,
    setFavoriteActuatorValue,
    setFavoriteSensorValue,
    updateSensorCurrentValue,
  ])

  return <Provider value={updaters}>{children}</Provider>
}

export { CategoriesUpdatersProvider, useCategoriesUpdatersCtx }
