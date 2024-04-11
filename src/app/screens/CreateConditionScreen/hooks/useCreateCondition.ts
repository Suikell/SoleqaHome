import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  useMCreateActuatorCondition,
  useMCreateSensorCondition,
} from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { useCreateConditionCtx } from '~screens/CreateConditionScreen/contexts/CreateConditionProvider'
import { isDefined } from '~utils/helpers/isDefined'

const SUCCESS_MESSAGE = 'Condition created'
const ERROR_MESSAGE = 'Failed to create condition.'

const NO_DEVICE_SELECTED = 'You must select a device'
const NO_CONDITION_SELECTED = 'You must select a condition'
const NO_VALUE_SELECTED = 'You must select a value'

export const useCreateCondition = () => {
  const { presentStatusToast } = useStatusToastCtx()

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
    if (!selectedDevice) {
      presentStatusToast('error', NO_DEVICE_SELECTED)
      return
    }
    if (!selectedSensorCondition) {
      presentStatusToast('error', NO_CONDITION_SELECTED)
      return
    }
    if (!sensorValue) {
      presentStatusToast('error', NO_VALUE_SELECTED)
      return
    }

    mCreateSensorCondition({
      variables: {
        groupId,
        sensorId: selectedDevice.id,
        operator: selectedSensorCondition,
        value: sensorValue,
      },
      refetchQueries: ['QGroupDetail', 'QGroups'],
    })
      .then(({ data }) => {
        const success = data?.result?.success
        if (success) {
          navigation.goBack()
        }

        presentStatusToast('success', SUCCESS_MESSAGE)
      })
      .catch((error) => {
        presentStatusToast('error', `${ERROR_MESSAGE} ${error.message}`)
      })
  }

  const crateActuatorCondition = () => {
    if (!selectedDevice) {
      presentStatusToast('error', NO_DEVICE_SELECTED)
      return
    }
    if (!selectedActuatorCondition) {
      presentStatusToast('error', NO_CONDITION_SELECTED)
      return
    }
    if (!isDefined(actuatorState)) {
      presentStatusToast('error', NO_VALUE_SELECTED)
      return
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
        presentStatusToast('success', SUCCESS_MESSAGE)
      })
      .catch((error) => {
        presentStatusToast('error', `${ERROR_MESSAGE} ${error.message}`)
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
