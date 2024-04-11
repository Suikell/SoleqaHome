import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  TFUser,
  useMChangeUserPassword,
  useMChangeUserProfile,
} from '~graphql/generated/graphql'
import { isDefined } from '~utils/helpers/isDefined'

type TProps = {
  setUser: ReactSetState<Nullable<TFUser>>
}

const successMessage = `Your changes have been saved`

export const useSettingUpdaters = ({ setUser }: TProps) => {
  const [mChangeUserProfile] = useMChangeUserProfile()
  const [mChangeUserPassword] = useMChangeUserPassword()
  const { presentStatusToast } = useStatusToastCtx()

  const changeUserProfile = React.useCallback(
    (firstName: string, lastName: string) => {
      mChangeUserProfile({
        variables: { firstName, lastName },
      })
        .then(({ data }) => {
          const user = data?.result?.user
          if (isDefined(user)) {
            presentStatusToast(`success`, successMessage)
            setUser(user)
          }
        })
        .catch((error) => {
          presentStatusToast(`error`, error.message)
        })
    },
    [mChangeUserProfile, presentStatusToast, setUser],
  )

  const changeUserPassword = React.useCallback(
    (oldPassword: string, newPassword: string) => {
      mChangeUserPassword({
        variables: { oldPassword, newPassword },
      })
        .then(({ data }) => {
          const success = data?.result?.success
          if (success) {
            presentStatusToast(`success`, successMessage)
          }
        })
        .catch((error) => {
          presentStatusToast(`error`, error.message)
        })
    },
    [mChangeUserPassword, presentStatusToast],
  )

  return {
    changeUserProfile,
    changeUserPassword,
  }
}
