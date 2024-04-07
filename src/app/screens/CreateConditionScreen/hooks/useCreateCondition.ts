import {
  useMCreateActuatorCondition,
  useMCreateSensorCondition,
} from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { isDefined } from '~utils/helpers/isDefined'

export const useCreateCondition = () => {
  const navigation = useNavigation()
  const {
    groupId,
    selectedType,
    selectedDevice,
    selectedSensorCondition,
    selectedActuatorCondition,
    sensorValue,
    actuatorState,
  } = useCreateConditionCtx()

  const [mCreateSensorCondition] = useMCreateSensorCondition()
  const [mCreateActuatorCondition] = useMCreateActuatorCondition()

  const createSensorCondition = () => {
    if (!selectedDevice || !selectedSensorCondition || !sensorValue) {
      return 'Missing fields'
    }

    mCreateSensorCondition({
      variables: {
        groupId,
        sensorId: selectedDevice.id,
        operator: selectedSensorCondition,
        value: sensorValue,
      },
      // TODO maybe QGroups is not needed?
      refetchQueries: ['QGroupDetail', 'QGroups'],
    })
      .then(({ data }) => {
        const success = data?.result?.success
        if (success) {
          navigation.goBack()
        }
        return success
      })
      .catch((error) => {
        return error
      })
  }

  const crateActuatorCondition = () => {
    if (
      !selectedDevice ||
      !selectedActuatorCondition ||
      !isDefined(actuatorState)
    ) {
      return 'Missing fields'
    }

    mCreateActuatorCondition({
      variables: {
        groupId,
        actuatorId: selectedDevice.id,
        operator: selectedActuatorCondition,
        state: actuatorState,
      },
      refetchQueries: ['QGroupDetail', 'QGroups'],
    })
      .then(({ data }) => {
        const success = data?.result?.success
        if (success) {
          navigation.goBack()
        }
        return success
      })
      .catch((error) => {
        return error
      })
  }

  const createCondition = () => {
    if (selectedType === 'sensor') {
      return createSensorCondition()
    }

    return crateActuatorCondition()
  }

  return { createCondition }
}
