import * as React from 'react'

import { ActuatorValues } from '~screens/CreateConditionScreen/components/ActuatorValues'
import { SensorValue } from '~screens/CreateConditionScreen/components/SensorValue'
import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'

type TProps = NoChildren

export const ConditionValue: React.FC<TProps> = () => {
  const { selectedType } = useCreateConditionCtx()

  if (selectedType === 'sensor') {
    return <SensorValue />
  }

  return <ActuatorValues />
}
