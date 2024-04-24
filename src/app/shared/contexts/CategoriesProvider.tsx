import * as React from 'react'
import { CategoriesUpdatersProvider } from 'src/app/shared/contexts/CategoriesUpdatersProvider'
import { useLoadCategories } from 'src/app/shared/hooks/useLoadCategories'

import { TFActuatorBase, TFSensorBase } from '~graphql/generated/graphql'
import { LoadingIndicator } from '~ui/Loading/LoadingIndicator'
import { createContext } from '~utils/context/createContext'

type TData = Pick<
  ReturnType<typeof useLoadCategories>,
  'categories' | 'sensors' | 'actuators'
>
type TStateContext = TData & {
  selectedCategoryIndex: ID
}

type TDeviceUpdatersContext = {
  updateSensor: (updatedSensor: TFSensorBase) => void
  updateActuator: (updatedActuator: TFActuatorBase) => void
}

const [
  Provider, //
  useCategoriesCtx,
] = createContext<TStateContext>(`CategoriesState`)

const [
  UpdaterProvider, //
  useDeviceUpdatersCtx,
] = createContext<TDeviceUpdatersContext>(`DeviceUpdaters`)

type TProps = RequiredChildren

const allEmptyCategoryId: ID = 0

/**
 * Context provider for categories, sensors and actuators.
 */
const CategoriesProvider: React.FC<TProps> = ({ children }) => {
  const { loading, categories, actuators, sensors, setSensors, setActuators } =
    useLoadCategories()

  const [selectedCategoryIndex, setSelectCategoryIndex] =
    React.useState<ID>(allEmptyCategoryId)

  const selectCategoryIndex = React.useCallback((categoryId: ID) => {
    setSelectCategoryIndex(categoryId)
  }, [])

  const updateSensor = React.useCallback(
    (updatedSensor: TFSensorBase) => {
      const sensorIndex = sensors.findIndex(
        (sensor) => sensor.id === updatedSensor.id,
      )
      if (sensorIndex !== -1) {
        setSensors((prevSensors) => [
          ...prevSensors.slice(0, sensorIndex),
          updatedSensor,
          ...prevSensors.slice(sensorIndex + 1),
        ])
      }
    },
    [sensors, setSensors],
  )

  const updateActuator = React.useCallback(
    (updatedActuator: TFActuatorBase) => {
      const sensorIndex = actuators.findIndex(
        (actuator) => actuator.id === updatedActuator.id,
      )
      if (sensorIndex !== -1) {
        setActuators((prevActuators) => [
          ...prevActuators.slice(0, sensorIndex),
          updatedActuator,
          ...prevActuators.slice(sensorIndex + 1),
        ])
      }
    },
    [actuators, setActuators],
  )

  const deviceUpdaters = React.useMemo<TDeviceUpdatersContext>(() => {
    return {
      updateSensor,
      updateActuator,
    }
  }, [updateSensor, updateActuator])

  if (loading) {
    return <LoadingIndicator />
  }

  return (
    <Provider
      value={{
        categories,
        actuators,
        sensors,
        selectedCategoryIndex,
      }}
    >
      <UpdaterProvider value={deviceUpdaters}>
        <CategoriesUpdatersProvider
          setSensors={setSensors}
          setActuators={setActuators}
          selectCategoryIndex={selectCategoryIndex}
        >
          {children}
        </CategoriesUpdatersProvider>
      </UpdaterProvider>
    </Provider>
  )
}

export { CategoriesProvider, useCategoriesCtx, useDeviceUpdatersCtx }
