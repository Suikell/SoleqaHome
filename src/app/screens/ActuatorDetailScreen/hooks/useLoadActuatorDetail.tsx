import {
  TQActuatorDetail,
  useQActuatorDetail,
} from '~graphql/generated/graphql'

export type TActuator = Defined<TQActuatorDetail['actuator']>

// todo error handling
// add mutations for editing sensor and sensor values (optimal, critical, ...)
export const useLoadActuatorDetail = (actuatorId: ID) => {
  const { data, loading } = useQActuatorDetail({
    variables: { actuatorId },
  })

  if (loading && !data?.actuator) {
    return { actuator: null, loading }
  }
  return {
    actuator: data?.actuator || null,
    loading,
  }
}
