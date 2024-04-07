import * as React from 'react'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import { SettingConfirmButtons } from '~screens/SettingsScreen/components/SettingConfirmButtons'
import { SettingContainer } from '~screens/SettingsScreen/components/SettingContainer'
import { SettingInput } from '~screens/SettingsScreen/components/SettingInput'

type TProps = NoChildren

export const SetNames: React.FC<TProps> = () => {
  const { user, changeUserProfile } = useAuthCtx()

  const [newFirstName, setNewFirstName] = React.useState(user.firstName)
  const [newLastName, setNewLastName] = React.useState(user.lastName)

  const [reset, setReset] = React.useState(false)

  const onConfirm = React.useCallback(() => {
    changeUserProfile(newFirstName, newLastName)
  }, [changeUserProfile, newFirstName, newLastName])

  return (
    <SettingContainer label={`Change your name or surname`}>
      <SettingInput
        label={`First name`}
        originalValue={user.firstName}
        onEndEditing={(value) => {
          setNewFirstName(value)
        }}
        resetDependency={reset}
      />
      <SettingInput
        label={`Last name`}
        originalValue={user.lastName}
        onEndEditing={(value) => {
          setNewLastName(value)
        }}
        resetDependency={reset}
      />
      <SettingConfirmButtons
        onCancel={() => setReset(!reset)}
        onConfirm={onConfirm}
      />
    </SettingContainer>
  )
}
