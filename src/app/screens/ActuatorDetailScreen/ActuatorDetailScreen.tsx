import * as React from 'react'
import { Pressable } from 'react-native'

import { TNavigationProps } from '~navigation/types'
import { ActuatorDetailContent } from '~screens/ActuatorDetailScreen/components/ActuatorDetailContent'
import { ActuatorDetailProvider } from '~screens/ActuatorDetailScreen/contexts/ActuatorDetailProvider'
import { useActuatorSetName } from '~screens/ActuatorDetailScreen/hooks/useActuatorSetName'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'ActuatorDetail'>

export const ActuatorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, actuatorId } = route.params
  const { actuatorName, setActuatorName } = useActuatorSetName()

  const [isManualControlOpen, setIsManualControlOpen] = React.useState(false)

  const onNameChange = React.useCallback(
    (newName: string) => {
      setActuatorName(actuatorId, newName)
    },
    [actuatorId, setActuatorName],
  )

  return (
    <>
      <DetailAppBar title={actuatorName ?? name} onNameChange={onNameChange} />

      <ActuatorDetailProvider actuatorId={actuatorId}>
        <Pressable
          onPress={() => {
            if (isManualControlOpen) {
              setIsManualControlOpen(false)
            }
          }}
        >
          <ActuatorDetailContent
            isManualControlOpen={isManualControlOpen}
            setIsManualControlOpen={setIsManualControlOpen}
          />
        </Pressable>
      </ActuatorDetailProvider>
    </>
  )
}
