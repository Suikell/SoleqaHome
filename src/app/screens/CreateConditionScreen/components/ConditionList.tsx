import * as React from 'react'

import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { ButtonsContainer } from '~ui/Buttons/ButtonsContainer'
import { DeviceButton } from '~ui/Buttons/DeviceButton'
import {
  getActuatorOperatorsList,
  getSensorOperatorsList,
} from '~ui/Group/helpers/getOperatorString'

type TProps = NoChildren

export const ConditionList: React.FC<TProps> = () => {
  const {
    selectedType,
    selectedSensorCondition,
    selectedActuatorCondition,
    selectSensorCondition,
    selectActuatorCondition,
  } = useCreateConditionCtx()
  const sensorOperators = getSensorOperatorsList()
  const actuatorOperators = getActuatorOperatorsList()

  const conditions = React.useMemo(() => {
    if (selectedType === 'sensor') {
      return sensorOperators.map((operator) => {
        const isSelected = selectedSensorCondition === operator.id
        return (
          <DeviceButton
            key={operator.id}
            name={operator.name}
            isSelected={isSelected}
            select={() => selectSensorCondition(operator.id)}
          />
        )
      })
    }

    return actuatorOperators.map((operator) => {
      const isSelected = selectedActuatorCondition === operator.id
      return (
        <DeviceButton
          key={operator.id}
          name={operator.name}
          isSelected={isSelected}
          select={() => selectActuatorCondition(operator.id)}
        />
      )
    })
  }, [
    actuatorOperators,
    selectActuatorCondition,
    selectSensorCondition,
    selectedActuatorCondition,
    selectedSensorCondition,
    selectedType,
    sensorOperators,
  ])

  return <ButtonsContainer>{conditions}</ButtonsContainer>
}
