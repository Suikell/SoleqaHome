import * as React from 'react'

import { ButtonsContainer } from '~screens/CreateConditionScreen/components/ButtonsContainer'
import { DeviceButton } from '~screens/CreateConditionScreen/components/DeviceButton'
import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { getActuatorStateString } from '~ui/Actuator/helpers/getActuatorStateString'

type TProps = NoChildren

const states = [true, false]

export const ActuatorValues: React.FC<TProps> = () => {
  const { actuatorState, setActuatorState } = useCreateConditionCtx()
  return (
    <ButtonsContainer>
      {states.map((state) => {
        const isSelected = actuatorState === state
        const name = getActuatorStateString(state)
        return (
          <DeviceButton
            key={name}
            name={name}
            isSelected={isSelected}
            select={() => setActuatorState(state)}
          />
        )
      })}
    </ButtonsContainer>
  )
}
