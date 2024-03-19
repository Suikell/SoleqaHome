import * as React from 'react'

import {
  TFUser,
  TMAuthUserVariables,
  useMAuthUser,
} from '~graphql/generated/graphql'

export type TLogin = TMAuthUserVariables

// type TSignInResult = {
//   wasSuccess: boolean
//   message: string
// }

type TProps = {
  setToken: ReactSetState<Nullable<string>>
}

/**
 * Handles login in form submit & validation
 */
export const useAuthUser = ({ setToken }: TProps) => {
  // const [signInResult, setSignInResult] =
  //   React.useState<Nullable<TSignInResult>>(null)

  const [user, setUser] = React.useState<Nullable<TFUser>>(null)

  const [mLogin, { data, error, loading }] = useMAuthUser()

  React.useEffect(() => {
    if (!data) return
    // if error, show toast?

    const login = data.login
    if (!login) return

    setToken(login.token)
    setUser(login.user)
  }, [data, setToken])

  const logoutUser = React.useCallback(() => {
    setUser(null)
    setToken(null)
  }, [setToken])

  const validateUser = React.useCallback(
    async (formValues: TLogin) => {
      const { email, password } = formValues

      // fast client-side validations

      if (email.length === 0) {
        // TODO status toast
        // message: `Email can’t be empty.`,
        return
      }

      if (!isEmail(email)) {
        //   message: `Wrong format of the email.`,
        return
      }

      if (password.length === 0) {
        //   message: `Password can’t be empty.`,
        return
      }

      // attempt sign in

      await mLogin({
        variables: { email, password },
      })

      console.log('after', data)
      console.log('error', error)
      console.log('loading2', loading)

      if (!loading && error) {
        console.log('whor here?')
        return
      }

      return data
    },
    [data, error, loading, mLogin],
  )

  console.log('loading', loading)
  console.log('error', error)
  return { logoutUser, validateUser, loading, user }
}

// * HELPERS

const isEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
