import * as React from 'react'
import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import {
  TFUser,
  TMAuthUserVariables,
  useMAuthUser,
} from '~graphql/generated/graphql'

export type TLogin = TMAuthUserVariables

type TProps = {
  setToken: ReactSetState<Nullable<string>>
}

/**
 * Handles login in form submit & validation
 */
export const useAuthUser = ({ setToken }: TProps) => {
  const [user, setUser] = React.useState<Nullable<TFUser>>(null)

  const [mLogin, { data, error, loading }] = useMAuthUser()
  const { presentStatusToast } = useStatusToastCtx()

  React.useEffect(() => {
    if (error) {
      presentStatusToast('error', error?.message)
      return
    }
    if (!data) return

    const login = data.login
    if (!login) return

    setToken(login.token)
    setUser(login.user)
  }, [data, error, presentStatusToast, setToken])

  const logoutUser = React.useCallback(() => {
    setUser(null)
    setToken(null)
  }, [setToken])

  const validateUser = React.useCallback(
    async (formValues: TLogin) => {
      const { email, password } = formValues

      if (email.length === 0) {
        presentStatusToast('error', `Email can’t be empty.`)
        return
      }

      if (password.length === 0) {
        presentStatusToast('error', `Password can’t be empty.`)
        return
      }

      if (!isEmail(email)) {
        presentStatusToast('error', `Wrong format of the email.`)
        return
      }

      await mLogin({
        variables: { email, password },
      })
    },
    [mLogin, presentStatusToast],
  )

  return { logoutUser, validateUser, loading, user, setUser }
}

// * HELPERS

const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
