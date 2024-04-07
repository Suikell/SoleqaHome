import * as React from 'react'
import { Pressable } from 'react-native'

import { TNavigationProps } from '~navigation/types'
import { ActuatorDetailContent } from '~screens/ActuatorDetailScreen/components/ActuatorDetailContent'
import { ActuatorDetailProvider } from '~screens/ActuatorDetailScreen/contexts/ActuatorDetailProvider'
import { DetailAppBar } from '~ui/Appbar/DetailAppBar'

type TProps = TNavigationProps<'ActuatorDetail'>

export const ActuatorDetailScreen: React.FC<TProps> = ({ route }) => {
  const { name, actuatorId } = route.params

  const [isManualControlOpen, setIsManualControlOpen] = React.useState(false)

  return (
    <ActuatorDetailProvider actuatorId={actuatorId}>
      <Pressable
        onPress={() => {
          if (isManualControlOpen) {
            setIsManualControlOpen(false)
          }
        }}
      >
        <DetailAppBar title={name} />

        <ActuatorDetailContent
          isManualControlOpen={isManualControlOpen}
          setIsManualControlOpen={setIsManualControlOpen}
        />
      </Pressable>
    </ActuatorDetailProvider>
  )
}
