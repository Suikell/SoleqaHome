import * as React from 'react'
import { useCreateUpdaters } from 'src/app/shared/hooks/useCreateUpdaters'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import { TFActuatorBase, TFSensorBase } from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TUpdatersContext = {
  selectCategoryIndex: (categoryId: ID) => void
  setManualOverride: (actuatorId: ID, state: boolean, until: Date) => void

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
  updateActuatorCurrentState: (
    actuatorId: ID,
    state: Defined<TFActuatorBase['currentState']>,
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
  const { setFavoriteSensor, setFavoriteActuator, setManualOverride } =
    useDeviceUpdaters()
  const { useCreateSensorUpdater, useCreateActuatorUpdater } =
    useCreateUpdaters({ setSensors, setActuators })

  const updateSensorCurrentValue = useCreateSensorUpdater('currentValue')
  const updateActuatorCurrentState = useCreateActuatorUpdater('currentState')

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
      setManualOverride,
      setFavoriteSensorValue,
      updateActuatorCurrentState,
    }
  }, [
    selectCategoryIndex,
    setFavoriteActuatorValue,
    setManualOverride,
    setFavoriteSensorValue,
    updateSensorCurrentValue,
    updateActuatorCurrentState,
  ])

  return <Provider value={updaters}>{children}</Provider>
}

export { CategoriesUpdatersProvider, useCategoriesUpdatersCtx }
