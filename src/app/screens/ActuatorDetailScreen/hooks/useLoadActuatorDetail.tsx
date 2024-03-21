import React from 'react'

import {
  TQActuatorDetail,
  useQActuatorDetail,
} from '~graphql/generated/graphql'

type TActuator = TQActuatorDetail['actuator']

// TODO load in provider
// add mutations for editing sensor and sensor values (optimal, critical, ...)
export const useLoadActuatorDetail = (actuatorId: ID) => {
  const [actuator, setActuator] = React.useState<TActuator>(null)

  const { data, error, loading } = useQActuatorDetail({
    variables: { actuatorId },
  })

  React.useEffect(() => {
    if (error || !data) {
      console.log('error', error)
      return
    }
    setActuator(data.actuator)
  }, [data, error])

  return { actuator, loading }
}
