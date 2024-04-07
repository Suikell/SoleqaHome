import * as React from 'react'

import {
  TFControlledActuator,
  useMChangeGroupActuatorState,
  useMDeleteGroup,
  useMRemoveActuatorCondition,
  useMRemoveControlledActuator,
  useMRemoveSensorCondition,
  useMSetGroupActive,
} from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { useLoadGroupDetail } from '~screens/GroupDetailScreen/hooks/useLoadGroupDetail'
import { isDefined } from '~utils/helpers/isDefined'

type TGroup = Defined<ReturnType<typeof useLoadGroupDetail>['group']>

export const useGroupUpdaters = (setGroup: ReactSetState<Nullable<TGroup>>) => {
  const navigation = useNavigation()
  const [mSetGroupActive] = useMSetGroupActive()
  const [mRemoveControlledActuator] = useMRemoveControlledActuator()
  const [mRemoveSensorCondition] = useMRemoveSensorCondition()
  const [mRemoveActuatorCondition] = useMRemoveActuatorCondition()
  const [mChangeGroupActuatorState] = useMChangeGroupActuatorState()
  const [mDeleteGroup] = useMDeleteGroup()

  const deleteGroup = React.useCallback(
    (groupId: ID) => {
      mDeleteGroup({
        variables: {
          groupId,
        },
        refetchQueries: ['QGroups'],
      })
        .then(({ data }) => {
          const success = Boolean(data?.result?.success)
          if (success) {
            navigation.goBack()
          }
        })
        .catch((error) => {
          console.error('could not remove group', error)
        })
    },

    [mDeleteGroup, navigation],
  )

  const updateStoredGroup = React.useCallback(
    (updatedPart: Partial<TGroup>) => {
      setGroup((prevGroup) => {
        if (!prevGroup) return null
        return {
          ...prevGroup,
          ...updatedPart,
        }
      })
    },
    [setGroup],
  )

  // BASIC GROUP FIELD UPDATERS

  const setGroupActive = React.useCallback(
    (groupId: ID, active: boolean) => {
      // first set only active state of group before fetching the updated group from BE based on MSetGroupActive mutation
      updateStoredGroup({ active })

      // then update active state on BE and update the group in the local state based on the result
      mSetGroupActive({
        variables: {
          groupId,
          active,
        },
      })
        .then(({ data }) => {
          const updatedGroup = data?.result?.group
          if (isDefined(updatedGroup)) {
            updateStoredGroup({ active: updatedGroup.active })
          }
        })
        .catch((error) => {
          console.error('could not activate group', error)
        })
    },
    [mSetGroupActive, updateStoredGroup],
  )

  // REMOVERS

  const removeActuatorFromGroup = React.useCallback(
    (groupId: ID, actuatorId: ID) => {
      setGroup((prevGroup) => {
        if (!prevGroup) return null
        return {
          ...prevGroup,
          controlledActuators: prevGroup.controlledActuators.filter(
            ({ actuator }) => actuator.id !== actuatorId,
          ),
        }
      })

      mRemoveControlledActuator({
        variables: {
          groupId,
          actuatorId,
        },
      })
        .then(({ data }) => {
          const updatedGroup = data?.result?.group
          if (isDefined(updatedGroup)) {
            updateStoredGroup({
              controlledActuators: updatedGroup.controlledActuators,
            })
          }
        })
        .catch((error) => {
          console.error('could not remove actuator from group', error)
        })
    },
    [mRemoveControlledActuator, setGroup, updateStoredGroup],
  )

  const removeSensorCondition = React.useCallback(
    (conditionId: ID) => {
      setGroup((prevGroup) => {
        if (!prevGroup) return null
        return {
          ...prevGroup,
          sensorConditions: prevGroup.sensorConditions.filter(
            (condition) => condition.id !== conditionId,
          ),
        }
      })

      mRemoveSensorCondition({
        variables: {
          sensorConditionId: conditionId,
        },
      })
        .then(({ data }) => {
          const updatedGroup = data?.result?.group
          if (isDefined(updatedGroup)) {
            updateStoredGroup({
              sensorConditions: updatedGroup.sensorConditions,
            })
          }
        })
        .catch((error) => {
          console.error('could not remove sensor condition', error)
        })
    },
    [mRemoveSensorCondition, setGroup, updateStoredGroup],
  )

  const removeActuatorCondition = React.useCallback(
    (conditionId: ID) => {
      setGroup((prevGroup) => {
        if (!prevGroup) return null
        return {
          ...prevGroup,
          actuatorConditions: prevGroup.actuatorConditions.filter(
            (condition) => condition.id !== conditionId,
          ),
        }
      })

      mRemoveActuatorCondition({
        variables: {
          actuatorConditionId: conditionId,
        },
      })
        .then(({ data }) => {
          const updatedGroup = data?.result?.group
          if (isDefined(updatedGroup)) {
            updateStoredGroup({
              actuatorConditions: updatedGroup.actuatorConditions,
            })
          }
        })
        .catch((error) => {
          console.error('could not remove actuator condition', error)
        })
    },
    [mRemoveActuatorCondition, setGroup, updateStoredGroup],
  )

  // CONTROLLED ACTUATOR UPDATERS

  const updateActuator = React.useCallback(
    (
      actuatorId: number,
      updateFunction: (
        actuatorObject: TFControlledActuator,
      ) => TFControlledActuator,
    ) => {
      setGroup((prevGroup) => {
        if (!prevGroup) return null

        const updatedActuators = prevGroup.controlledActuators.map(
          (actuatorObject) => {
            if (actuatorObject.actuator.id === actuatorId) {
              return updateFunction(actuatorObject)
            }
            return actuatorObject
          },
        )

        return {
          ...prevGroup,
          controlledActuators: updatedActuators,
        }
      })
    },
    [setGroup],
  )

  const setActuatorChangeToState = React.useCallback(
    (groupId: ID, actuatorId: ID, changeTo: boolean) => {
      // Update the changeToState property
      updateActuator(actuatorId, (actuatorObject) => ({
        ...actuatorObject,
        changeToState: changeTo,
      }))

      mChangeGroupActuatorState({
        variables: {
          groupId,
          actuatorId,
          changeToState: changeTo,
        },
      })
        .then(({ data }) => {
          const updatedActuator = data?.result?.actuator
          if (isDefined(updatedActuator)) {
            // Replace the actuator object
            updateActuator(actuatorId, () => updatedActuator)
          }
        })
        .catch((error) => {
          console.error('could not change actuator state', error)
        })
    },
    [mChangeGroupActuatorState, updateActuator],
  )

  return {
    setGroupActive,
    removeActuatorFromGroup,
    removeSensorCondition,
    removeActuatorCondition,
    setActuatorChangeToState,
    deleteGroup,
  }
}
