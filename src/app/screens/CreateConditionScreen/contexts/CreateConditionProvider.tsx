import * as React from 'react'

import {
  TActuatorOperatorEnum,
  TMAuthUserVariables,
  TSensorOperatorEnum,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

export type TDeviceType = 'sensor' | 'actuator'

export type TDevice = {
  id: ID
  name: string
  unit?: string
}

type TContext = {
  groupId: ID

  selectedType: TDeviceType
  selectType: (type: TDeviceType) => void

  selectedDevice: Nullable<TDevice>
  selectDevice: (id: ID, name: string, unit?: string) => void

  isDeviceVisible: boolean
  toggleDeviceVisibility: () => void

  isConditionVisible: boolean
  toggleConditionVisibility: () => void

  isValueVisible: boolean
  toggleValueVisibility: () => void

  selectedSensorCondition: Nullable<TSensorOperatorEnum>
  selectSensorCondition: (condition: TSensorOperatorEnum) => void

  selectedActuatorCondition: Nullable<TActuatorOperatorEnum>
  selectActuatorCondition: (condition: TActuatorOperatorEnum) => void

  actuatorState: Nullable<boolean>
  setActuatorState: (state: boolean) => void

  sensorValue: Nullable<number>
  setSensorValue: (value: number) => void
}

export type TLogin = TMAuthUserVariables

const [Provider, useCreateConditionCtx] =
  createContext<TContext>(`CreateCondition`)

type TProps = RequiredChildren & {
  groupId: ID
}

const CreateConditionProvider: React.FC<TProps> = ({ groupId, children }) => {
  const [selectedType, setSelectedType] = React.useState<TDeviceType>('sensor')

  const [isDeviceVisible, setIsDeviceVisible] = React.useState(false)
  const [isConditionVisible, setIsConditionVisible] = React.useState(false)
  const [isValueVisible, setIsValueVisible] = React.useState(false)

  const [selectedSensor, setSelectedSensor] =
    React.useState<Nullable<TDevice>>(null)
  const [selectedActuator, setSelectedActuator] =
    React.useState<Nullable<TDevice>>(null)

  const [selectedSensorCondition, setSelectedSensorCondition] =
    React.useState<Nullable<TSensorOperatorEnum>>(null)
  const [selectedActuatorCondition, setSelectedActuatorCondition] =
    React.useState<Nullable<TActuatorOperatorEnum>>(null)

  const [actuatorState, setActuatorStateValue] =
    React.useState<Nullable<boolean>>(null)
  const [sensorValue, setSensorValueValue] =
    React.useState<Nullable<number>>(null)

  const selectedDevice = React.useMemo(() => {
    return selectedType === 'sensor' ? selectedSensor : selectedActuator
  }, [selectedActuator, selectedSensor, selectedType])

  const toggleDeviceVisibility = React.useCallback(() => {
    setIsDeviceVisible((prev) => !prev)
  }, [])

  const toggleConditionVisibility = React.useCallback(() => {
    setIsConditionVisible((prev) => !prev)
  }, [])

  const toggleValueVisibility = React.useCallback(() => {
    setIsValueVisible((prev) => !prev)
  }, [])

  const selectType = (type: TDeviceType) => {
    setSelectedType(type)
  }

  const selectDevice = React.useCallback(
    (id: ID, name: string, unit?: string) => {
      return selectedType === 'sensor'
        ? setSelectedSensor({ id, name, unit })
        : setSelectedActuator({ id, name })
    },
    [selectedType],
  )

  const selectSensorCondition = React.useCallback(
    (condition: TSensorOperatorEnum) => {
      setSelectedSensorCondition(condition)
    },
    [],
  )

  const selectActuatorCondition = React.useCallback(
    (condition: TActuatorOperatorEnum) => {
      setSelectedActuatorCondition(condition)
    },
    [],
  )

  const setActuatorState = React.useCallback((state: boolean) => {
    setActuatorStateValue(state)
  }, [])

  const setSensorValue = React.useCallback((value: number) => {
    setSensorValueValue(value)
  }, [])

  const value = React.useMemo(() => {
    return {
      groupId,
      selectedType,
      selectType,
      selectedDevice,
      selectDevice,
      isDeviceVisible,
      toggleDeviceVisibility,
      isConditionVisible,
      toggleConditionVisibility,
      isValueVisible,
      toggleValueVisibility,
      selectedSensorCondition,
      selectSensorCondition,
      selectedActuatorCondition,
      selectActuatorCondition,
      actuatorState,
      setActuatorState,
      sensorValue,
      setSensorValue,
    }
  }, [
    groupId,
    actuatorState,
    isConditionVisible,
    isDeviceVisible,
    isValueVisible,
    selectActuatorCondition,
    selectDevice,
    selectSensorCondition,
    selectedActuatorCondition,
    selectedDevice,
    selectedSensorCondition,
    selectedType,
    sensorValue,
    setActuatorState,
    setSensorValue,
    toggleConditionVisibility,
    toggleDeviceVisibility,
    toggleValueVisibility,
  ])

  return <Provider value={value}>{children}</Provider>
}

export { CreateConditionProvider, useCreateConditionCtx }
