import {
  TActuatorOperatorEnum,
  TSensorOperatorEnum,
} from '~graphql/generated/graphql'

const getFormattedOperator = (operator: string) => {
  const withoutUnderscore = operator.replace(/_/g, ' ')
  const words = withoutUnderscore.split(' ')
  if (words.length === 4) {
    words[2] = `\n${words[2]}` // Add a newline character before the third word
  }
  return words.join(' ').toLowerCase()
}

export const getSensorOperatorString = (operator: TSensorOperatorEnum) => {
  const operatorString = operator.toString()
  return getFormattedOperator(operatorString)
}

// TODO - remove NULLABLE when BE is fixed
export const getActuatorOperatorString = (operator: TActuatorOperatorEnum) => {
  const operatorString = operator.toString()
  return getFormattedOperator(operatorString)
}

const actuatorOperators: RoA<TActuatorOperatorEnum> = ['EQUAL', 'NOT_EQUAL']

export const getActuatorOperatorsList = () => {
  return actuatorOperators.map((actuator) => {
    const name = getActuatorOperatorString(actuator)
    return { id: actuator, name }
  })
}

const sensorOperators: RoA<TSensorOperatorEnum> = [
  'EQUAL',
  'NOT_EQUAL',
  'LESS_THAN',
  'GREATER_THAN',
  'LESS_THAN_OR_EQUAL',
  'GREATER_THAN_OR_EQUAL',
]

export const getSensorOperatorsList = () => {
  return sensorOperators.map((sensor) => {
    const name = getSensorOperatorString(sensor)
    return { id: sensor, name }
  })
}
