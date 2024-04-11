import * as React from 'react'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import { SettingConfirmButtons } from '~screens/SettingsScreen/components/SettingConfirmButtons'
import { SettingContainer } from '~screens/SettingsScreen/components/SettingContainer'
import { SettingInput } from '~screens/SettingsScreen/components/SettingInput'

type TProps = NoChildren

export const SetPassword: React.FC<TProps> = () => {
  const { changeUserPassword } = useAuthCtx()

  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')

  const [reset, setReset] = React.useState(false)

  const onConfirm = React.useCallback(() => {
    changeUserPassword(oldPassword, newPassword)
  }, [changeUserPassword, newPassword, oldPassword])

  return (
    <SettingContainer label={`Change your password`}>
      <SettingInput
        label={`Old password`}
        secureTextEntry
        originalValue={''}
        onEndEditing={(value) => {
          setOldPassword(value)
        }}
        resetDependency={reset}
      />
      <SettingInput
        label={`New password`}
        secureTextEntry
        originalValue={''}
        onEndEditing={(value) => {
          setNewPassword(value)
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
