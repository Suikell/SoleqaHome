import * as React from 'react'

import {
  TFUser,
  useMChangeUserPassword,
  useMChangeUserProfile,
} from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = {
  setUser: ReactSetState<Nullable<TFUser>>
}
export const useSettingUpdaters = ({ setUser }: TProps) => {
  const [mChangeUserProfile] = useMChangeUserProfile()
  const [mChangeUserPassword] = useMChangeUserPassword()

  const [settingError, setSettingError] = React.useState<Nullable<string>>('')
  const [userSuccess, setUserSuccess] = React.useState<Nullable<boolean>>(null)
  const [passwordSuccess, setPasswordSuccess] =
    React.useState<Nullable<boolean>>(null)

  const changeUserProfile = React.useCallback(
    (firstName: string, lastName: string) => {
      mChangeUserProfile({
        variables: { firstName, lastName },
      })
        .then(({ data }) => {
          const user = data?.result?.user
          if (isDefined(user)) {
            setUserSuccess(true)
            setUser(user)
          }
        })
        .catch((error) => {
          setUserSuccess(false)
          setSettingError(error.message)
          console.log('error', error)
        })
      setUserSuccess(null)
    },
    [mChangeUserProfile, setUser],
  )

  const changeUserPassword = React.useCallback(
    (oldPassword: string, newPassword: string) => {
      mChangeUserPassword({
        variables: { oldPassword, newPassword },
      })
        .then(({ data }) => {
          const success = data?.result?.success
          if (success) {
            setPasswordSuccess(true)
          }
        })
        .catch((error) => {
          console.log('error', error)
          setPasswordSuccess(false)
          setSettingError(error.message)
        })
      setPasswordSuccess(null)
    },
    [mChangeUserPassword],
  )

  return {
    changeUserProfile,
    changeUserPassword,
    userSuccess,
    passwordSuccess,
    settingError,
  }
}
