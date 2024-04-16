import * as React from 'react'
import { useCreateUpdaters } from 'src/app/shared/hooks/useCreateUpdaters'
import { useDeviceUpdaters } from 'src/app/shared/hooks/useDeviceUpdaters'

import { TFActuatorBase, TFSensorBase } from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

type TUpdatersContext = {
  selectCategoryIndex: (categoryId: ID) => void
  setManualOverride: (actuatorId: ID, state: boolean, until: Date) => void
  cancelManualOverride: (actuatorId: ID) => void
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
  updateSensorFavoriteValue: (
    sensorId: ID,
    value: TFSensorBase['favorite'],
  ) => void
  updateActuatorCurrentState: (
    actuatorId: ID,
    state: Defined<TFActuatorBase['currentState']>,
  ) => void
  updateSensorName: (sensorId: ID, name: TFSensorBase['name']) => void
  updateActuatorName: (actuatorId: ID, name: TFActuatorBase['name']) => void
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
  const {
    setFavoriteSensor,
    setFavoriteActuator,
    setManualOverride: setManualOverrideValue,
  } = useDeviceUpdaters()
  const { useCreateSensorUpdater, useCreateActuatorUpdater } =
    useCreateUpdaters({ setSensors, setActuators })

  const updateSensorCurrentValue = useCreateSensorUpdater('currentValue')
  const updateSensorFavoriteValue = useCreateSensorUpdater('favorite')

  const updateActuatorCurrentState = useCreateActuatorUpdater('currentState')

  const updateSensorName = useCreateSensorUpdater('name')
  const updateActuatorName = useCreateActuatorUpdater('name')

  const setFavoriteSensorValue = useCreateSensorUpdater(
    'favorite',
    setFavoriteSensor,
  )
  const setFavoriteActuatorValue = useCreateActuatorUpdater(
    'favorite',
    setFavoriteActuator,
  )

  const cancelManualOverride = React.useCallback(
    (actuatorId: ID) => {
      setManualOverrideValue(actuatorId)
    },
    [setManualOverrideValue],
  )

  const setManualOverride = React.useCallback(
    (actuatorId: ID, state: boolean, until: Date) => {
      setManualOverrideValue(actuatorId, state, until)
    },
    [setManualOverrideValue],
  )

  const updaters = React.useMemo<TUpdatersContext>(() => {
    return {
      updateSensorName,
      updateActuatorName,
      selectCategoryIndex,
      updateSensorCurrentValue,
      setFavoriteActuatorValue,
      cancelManualOverride,
      setManualOverride,
      setFavoriteSensorValue,
      updateActuatorCurrentState,
      updateSensorFavoriteValue,
    }
  }, [
    updateSensorName,
    updateActuatorName,
    selectCategoryIndex,
    setFavoriteActuatorValue,
    updateSensorFavoriteValue,
    setManualOverride,
    setFavoriteSensorValue,
    cancelManualOverride,
    updateSensorCurrentValue,
    updateActuatorCurrentState,
  ])

  return <Provider value={updaters}>{children}</Provider>
}

export { CategoriesUpdatersProvider, useCategoriesUpdatersCtx }
