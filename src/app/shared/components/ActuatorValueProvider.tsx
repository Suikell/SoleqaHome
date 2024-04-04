import * as React from 'react'
import { useCategoriesUpdatersCtx } from 'src/app/shared/contexts/CategoriesUpdatersProvider'

import {
  TActuatorNodeSubscriptionType,
  useSActuatorValue,
} from '~graphql/generated/graphql'
import { createContext } from '~utils/context/createContext'

// Because for some amazing reason subscriptions on BE must be defined as unions..
type TActuator = TActuatorNodeSubscriptionType
type TActuatorSubscription = Pick<TActuator, 'id' | 'currentState'>

type TProps = RequiredChildren

type TContext = {
  sensorId: TActuatorSubscription['id']
  newValue: TActuatorSubscription['currentState']
}

const [Provider, useActuatorValueCtx] =
  createContext<Nullable<TContext>>(`ActuatorValue`)

const ActuatorValueProvider: React.FC<TProps> = ({ children }) => {
  const result = useSActuatorValue()
  const [value, setValue] = React.useState<Nullable<TContext>>(null)
  const { updateActuatorCurrentState } = useCategoriesUpdatersCtx()

  React.useEffect(() => {
    if (result.error) {
      return
    }

    if (result.data && result.data.change) {
      const data = result.data.change.data as TActuatorSubscription
      const { id, currentState } = data

      if (!currentState) return
      updateActuatorCurrentState(id, currentState)
      setValue({
        sensorId: id,
        newValue: currentState,
      })
    }
  }, [result, result.data, result.error, updateActuatorCurrentState])

  return <Provider value={value}>{children}</Provider>
}

export { ActuatorValueProvider, useActuatorValueCtx }
